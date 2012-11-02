package engine.event

import com.alloyengine.powder._

case class ButtonHit(

  name: String,
  teamId: Int
    
) extends EventData