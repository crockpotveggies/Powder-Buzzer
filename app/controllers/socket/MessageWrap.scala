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

import play.api.Logger
import play.api.libs.json

import com.codahale.jerkson.Json._

trait MessageWrap

object MessageWrap {

  /**
   * generate the string data used in message transports
   */
  implicit def generateMsgString(data:MessageWrap):String = {
    generate(Map(
    	"relay" -> data.getClass.getSimpleName,
      "data" -> data
    ))
  }

  /**
   * convert a list of data to JSON
   */
  implicit def castListString(data:List[String]) = {
    generate(data)
  }

}
  

// Relay Utilities
case class MsgRaw(relay: String, relayId: Option[String], data: AnyRef) extends MessageWrap
case class MsgReceipt(relayId: String, status: Boolean) extends MessageWrap
case class MsgError(message: String) extends MessageWrap



