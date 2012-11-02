package controllers

import play.api._
import play.api.mvc._
import play.api.Play.current
import play.api.Configuration

/**
 * Trait for defining the connection to the engine
 */
trait Engineuity {
   
  /**
   * specifies the socket domain and port 
   */
  def socketAddress(request: RequestHeader) = {
    val protocol = play.api.Play.isDev match {
      case true => "ws://"
      case false => "wss://"
    }
    val port = play.api.Play.isDev match {
      case true => Play.current.configuration.getString("websockets.port").get
      case false => Play.current.configuration.getString("websockets.portexternal").get
    }
    protocol + request.domain + ":" + port
  }

}