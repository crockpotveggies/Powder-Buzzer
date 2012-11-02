/*
 *	        __   __
 *	_____ _|  | |  |   ____ ___ __
 *	\__    |  | |  |  /  _ \   |  |
 *	 / __  |  |_|  |_(  |_| )___  |
 *	(____  /____/____/\____// ____|
 *	     \/                 \/
 *     
 *	     Copyright Alloy Technologies
 */
package controllers.socket

import play.api._
import play.api.mvc._
import play.api.Logger
import play.api.Play.current
import play.api.db.DB

import models._

import engine.event._
import com.alloyengine.powder._

import scala.collection.mutable.Map
import java.util.Date
import java.io._

import org.webbitserver._
import org.squeryl._
import org.squeryl.adapters.PostgreSqlAdapter
import org.squeryl.PrimitiveTypeMode._

import com.codahale.jerkson.Json._

/**
 * it's all about parsing messages
 */
object MessageParser {
  	
  def readStringMsg(s:WebSocketConnection, rawMessage:String) = {
  	try {
	    val event = parseRawMessage(s, rawMessage)
	    Powder.getInstance.publish(PowderEvent("/logic",event))
	    
	  } catch {
	    case e => 
	      val errors = new StringWriter()
	      e.printStackTrace(new PrintWriter(errors))
	      Logger.error("Websocket MessageParser failed. \r\n The MESSAGE: %s \r\n The error %s" format (rawMessage,errors))
	  }
  }
  
  /**
   * match to a case class
   */
  def matchMsg(s:WebSocketConnection, msgCase:String, msgData:String):EventData = {
    msgCase match {
       // context events
       case "BoardOpen"            => var board = parse[BoardOpen](msgData); new BoardOpen(board.view,Some(s))
       case "MobileOpen"           => parse[MobileOpen](msgData)
       
       // app events
       case "AnswerCorrect"					=> parse[AnswerCorrect](msgData)
       case "AnswerIncorrect"				=> parse[AnswerIncorrect](msgData)
       case "ButtonHit"							=> parse[ButtonHit](msgData)
       case "TileOpen"							=> parse[TileOpen](msgData)
       case "TileClose"							=> parse[TileClose](msgData)
       
    }
  }
  
  /**
   * parse the raw JSON string
   */
  def parseRawMessage(s:WebSocketConnection, messageRaw:String):EventData = {
    val msgData = {
	    	val MsgEncoded = "\\{(.*)\"data\":(.*)\\}".r
	      val MsgEncoded(crap, data) = messageRaw
	      (data)
    }
    val (msgType, msgId) = {
      val output = parse[MsgRaw](messageRaw)
      (output.relay, output.relayId)
    }
    
    var Receipt = Tuple2[WebSocketConnection, String](s, "000000")
	  if(msgId!=None) Receipt = Tuple2(s, msgId.get)
    MessageReceipt.Receiptor ! Receipt
    
    matchMsg(s, msgType, msgData)
  }
  
}
