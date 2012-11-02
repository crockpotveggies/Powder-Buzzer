package engine.listener

import com.alloyengine.powder._
import akka.actor._
import play.api.Logger
import org.webbitserver._
import com.codahale.jerkson.Json._


/**
 * a custom listener that dives directly into akka for websockets
 */
class BoardSocket (
  
  val s: WebSocketConnection
    
) extends Actor {

  def generateMsg(data:Any):String = {
    generate(Map(
    	"relay" -> data.getClass.getSimpleName,
      "data" -> data
    ))
  }
  
  def receive = {
    case data =>
      s.send( generateMsg(data) )
      
  }
  
}