package models

import play.api.Logger
import play.api.data.validation._

import akka.dispatch._
import org.squeryl._
import org.squeryl.annotations.Column
import org.squeryl._
import org.squeryl.dsl._
import org.squeryl.dsl.ast._
import org.squeryl.dsl.ast.BinaryOperatorNodeLogicalBoolean._

import PrimitiveTypeMode._

import java.util.Date
import java.sql.Timestamp
import java.util.TimeZone
import java.text.SimpleDateFormat

case class BuzzerStatus(
    
  val open: Boolean,
  val user: Option[String],
  val team: Option[String]
  
  
)

 
object BuzzerStatus {

  var status = new BuzzerStatus(true,None,None)
  
}