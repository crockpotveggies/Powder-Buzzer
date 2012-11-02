package engine.event

import com.alloyengine.powder._

import org.webbitserver._


case class BoardOpen(
  
  view: String,
  s: Option[WebSocketConnection]
    
) extends EventData