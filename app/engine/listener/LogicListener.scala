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
class EventLogic extends Actor {
  
  def receive = {
    case BoardOpen(view,Some(s)) =>
      val pow = controllers.Application.powder
		  Logger.info("WORKING")
      // custom listener, not elegant but this is how you do it
		  val actor = new BoardSocket( s )
		  val listener = pow.registerCustomListener( actor )
		  // you need to manually subscribe the custom listener
		  pow.eventBus.subscribe(listener, "/socket/board")
		  
		  // send out board data
		  val status = BuzzerStatus.status
		  pow.publish(PowderEvent("/socket/board",BoardSync(status)))
      
    case _ => 
      Logger.error("Unsupported event logic")
      
  }
}


object EventLogic {
  
  val actor = new EventLogic
	val listener = Powder.getInstance.registerCustomListener( actor )

	Powder.getInstance.subscribe(listener, "/logic")

}

