package controllers

import play.api._
import play.api.mvc._
import play.api.data._
import play.api.data.Forms._
import play.api.data.format.Formats._

import models._

import com.alloyengine.powder.Powder
import org.webbitserver._

import java.io._

import controllers.socket._


object Application extends Controller with Engineuity {
  
  /**
   * main board page
   */
  def index = Action { implicit request =>
    Ok(views.html.main( socketAddress(request) ))
  }
  
  /**
   * mobile interface
   */
  def mobile(teamId: Long) = Action { implicit request =>
    Ok(views.html.mobile( socketAddress(request) ))
  }
  
  
  

  /**
   * websocket server
   */
  val conf = play.api.Play.current.configuration
  val port = conf.getInt("websockets.port").get
  val instanceID = new java.util.Random().nextInt(77777).toString
  
  val powder = new Powder

  def run() {
    startEngine{
      case Open(s) => 
        val socketId = s.toString
        Logger.info("Socket open " + socketId)

      case Close(s) => 
        val socketId = s.toString
        Logger.info("Socket open " + socketId)

      case Pong(s, bytes) => 
        // do nothing

      case StringMsg(s, msg) =>
        socket.MessageParser.readStringMsg(s, msg)
    }
  }

  def startEngine(webSocketHandler:PartialFunction[SocketEvent, Unit]) = {
    val server = WebServers.createWebServer(port)
    try {      
      server.add("/", new MsgEventAdapter(webSocketHandler))
      server.start
      
    } catch {
      case e => 
        val errors = new StringWriter()
	      e.printStackTrace(new PrintWriter(errors))
	      Logger.error("ERROR: Websockets failed to start up \r\n "+errors)
    }
  }
  
}