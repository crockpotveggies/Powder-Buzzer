import play.api._
import play.api.db._
import play.api.mvc._
import play.api.mvc.Results._
import play.api.Configuration
import play.api.Play.current

import org.squeryl._
import org.squeryl.adapters.PostgreSqlAdapter
import org.squeryl.PrimitiveTypeMode._

import akka._
import akka.actor._
import akka.actor.Actor._
import akka.util.duration._

import org.fusesource.jansi.Ansi._
import org.fusesource.jansi.Ansi.Color._

/**
 * the big global class that lays the foundation
 */
object Global extends GlobalSettings {
  
  // postgresql adapter
  val dbAdapter = new PostgreSqlAdapter()

  /**
   * boot jobs to run on application start
   */
  override def onStart(app: Application) {
    SessionFactory.concreteFactory = Some(() =>
      org.squeryl.Session.create(
        DB.getDataSource().getConnection(),
        dbAdapter))
        
    controllers.Application.run // start up websocket server

    println(ansi().fg(MAGENTA).a("""
   _                           _      
  (_)___ ___ _ __  __ _ _ _ __| |_  _ 
  | / -_) _ \ '_ \/ _` | '_/ _` | || |
 _/ \___\___/ .__/\__,_|_| \__,_|\_, |
|__/        |_|                  |__/ 

    """) )
  }

}