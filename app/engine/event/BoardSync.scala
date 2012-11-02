package engine.event

import com.alloyengine.powder._

import models._

case class BoardSync(

  status: BuzzerStatus
    
) extends EventData