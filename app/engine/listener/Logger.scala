package engine.listener

import com.alloyengine.powder._
import akka.actor._
import engine.event._
import models._
import play.api.Logger
import org.squeryl.PrimitiveTypeMode._

/**
 * custom listener for event logic
 */
class EventLogger extends Actor {
  
  def receive = {
    case anything =>
      Logger.info("Event data: %s" format anything.toString)
      
  }
}


object EventLogger {
  
  val actor = new EventLogger
	val listener = Powder.getInstance.registerCustomListener( actor )

	Powder.getInstance.subscribe(listener, "/")

}

