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
/*
 * LISTING DATA MODELS
 */
function team(data) {
    this.id = ko.observable(data.id);
    this.name = ko.observable(data.name);
}
function user(data) {
    this.id = ko.observable(data.id);
    this.name = ko.observable(data.name);
    this.teamId = ko.observable(data.teamId);
}
function category(data) {
    this.id = ko.observable(data.id);
    this.name = ko.observable(data.name);
}
function fact(data) {
    this.id = ko.observable(data.id);
    this.points = ko.observable(data.points);
    this.fact = ko.observable(data.fact);
    this.answer = ko.observable(data.answer);
    this.categoryId = ko.observable(data.categoryId);
}

/*
 * VIEWMODELS
 */
function ApplicationViewModel(data) {
    var self = this;
    /**
     * dynamic data mapping for sort
     */
    var categoryMapping = {
      "categories": {
        key: function(data) { return ko.utils.unwrapObservable(data.id); },
        create: function(options) {
            // for sortable ui access
            return createCategory(options.data);
        }
      }
    };
    var factMapping = {
      "facts": {
        create: function(options) {
            // for sortable ui access
            return createFact(options.data);
        },
        update: function(options) {
            return createFact(options.data);
        }
      }
    };
    var createCategory = function(category) {
      var result = ko.mapping.fromJS(category, teamMapping);
      result.facts.categoryId = category.id;
      return result;
    };
    var createFact = function(fact) {
      var result = ko.mapping.fromJS(fact);
      return result;
    };
    
    
    /**
     * application dynamic data collections
     */
    var initEngine = {"categories":[{"id":0,"name":"Loading..."}]};
    // Collections
    self.currentAppView = ko.observable();
    
    /**
     * jeopardy collections
     */
    self.jeopModel = ko.mapping.fromJS(initEngine, factMapping);
    
    /**
     * team settings
     */    
    self.settingsTabHandler = ko.observable('users').extend({ notify: "always" });
    
    /**
     * data proxies
     */
    self.jeopModel.update = function(data) {
      ko.mapping.fromJS(data, categoryMapping, self.jeopModel);
    };
    
    /**
     * client routing
     */
    self.goToAppView = function(appView) { 
    	location.hash = '!/' + appView;
    };    
    Sammy(function() {
      this.get('#!/:appView', function() {
        self.currentAppView(this.params.appView);
  		$('#loader').show();
  		$('.appview').hide();
  		ko.applyBindings(new window[this.params.appView+'ViewModel']());
      	$('#loader').hide();
      });this.notFound = function(){
        location.hash = "!/board";
      }
    }).run();
    

    /*
     * bind actions from engine
     */
    $.relaySettings.events['RelayError'] = function(data) {
        var event = $.Event('engineError');
        $('body').trigger(event);
        console.log("Error from Engine: "+data.message);
    };
    $.relaySettings.events['MsgReceipt'] = function(data) {
        if(data.status) {
            clearTimeout(window.relayTimeout[data.relayId]);
            delete window.relayTimeout[data.relayId];
            delete window.relayQueue[data.relayId]
            var event = $.Event('engineReceipt');
            $('body').trigger(event);
        }
    };
    
    
    /*
     * handlers for different engine click events
     */
    self.handleTileOpen = function(event, data) {
      $.relaySend('TileOpen', {state:"make_admin", userId: event.id(), teamId: getCurrentTeam() });
    }
    self.handleTileClose = function() {
      $.relaySend('ChatMsg', {userId: getUserId(), teamId: getCurrentTeam(), content: chatContent, announce: false });
    }
};

/*
 * initialize and boot the interface with handlers
 */
function init_and_bind() {
    $.relaySocket( getEngineUrl() );
    window.vm = new ApplicationViewModel();
    ko.applyBindings(vm);
}

/*
 * application template view models
 */

function boardViewModel() {
    var self = this;
    $('#board').show();
}









$().ready(function(){
    /*
     * Initialize the application beyond the MVVM
     */
    $('body').bind('engineOpen', function() {
        $('#nav-engine i').css('background-position','top');
        try { $('#nav-engine').qtip('destroy'); } catch(err) {}
        $('#nav-engine').qtip({
            content: { text: '<strong>Jeopardy Online</strong>' },
            position: {
                my: 'top right',  // Position my top left...
                at: 'bottom center', // at the bottom right of...
                target: $('#nav-engine') // my target
            }
        });
        $('#nav-engine').qtip('toggle', false);
    });
    $('body').bind('engineClosed', function() {        
        $('#nav-engine i').css('background-position','bottom');
        try { $('#nav-engine').qtip('destroy'); } catch(err) {}
        $('#nav-engine').qtip({
            content: { text: '<img src="https://alloyengine.com/assets/img/icons/load-alert.gif" style="margin-right:10px;" /><strong>Reconnecting...</strong>' },
            position: {
                my: 'top right',  // Position my top left...
                at: 'bottom center', // at the bottom right of...
                target: $('#nav-engine') // my target
            },
            style: {
                classes: 'ui-tooltip-alert'
            }
        });
        $('#nav-engine').qtip('toggle', true);
    });
    $('body').bind('engineReceipt', function() {
        $('#nav-engine i').css('background-position','center');
        setTimeout(function() {
            $('#nav-engine i').css('background-position','top');
        }, 200);
    });
    $('body').bind('engineError', function() {
        try { $('#nav-engine').qtip('destroy'); } catch(err) {}
        $('#nav-engine').qtip({
            content: { text: '<strong>Error:</strong> Sorry action failed!' },
            position: {
                my: 'top right',  // Position my top left...
                at: 'bottom center', // at the bottom right of...
                target: $('#nav-engine') // my target
            },
            style: {
                classes: 'ui-tooltip-alert'
            }
        });
        $('#nav-engine').qtip('toggle', true);
        setTimeout(function() {$('#nav-engine').qtip('destroy');}, 4000);
    });
    $('body').bind('engineRetry', function() {
        try { $('#nav-engine').qtip('destroy'); } catch(err) {}
        $('#nav-engine').qtip({
            content: { text: '<strong>Warning:</strong> Resending last action' },
            position: {
                my: 'top right',  // Position my top left...
                at: 'bottom center', // at the bottom right of...
                target: $('#nav-engine') // my target
            },
            style: {
                classes: 'ui-tooltip-alert'
            }
        });
        $('#nav-engine').qtip('toggle', true);
        setTimeout(function() {$('#nav-engine').qtip('destroy');}, 4000);
    });
    
    $('body').bind('scheduleRefresh', function() {
        window.vm.scheduleRefreshHandler();
    });
    
});

/*
 * submits chat enter key
 */
function enterkey(evt) {
    var charCode = (evt.which) ? evt.which : window.event.keyCode; 
    if (charCode == 13) { 
        window.vm.handleChatSend();
        evt.preventDefault();
    }
    return false;
}

/**
 * used for string to hex color
 */
function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
} 

function intToARGB(i){
    return ((i>>24)&0xFF).toString(16) + 
           ((i>>16)&0xFF).toString(16) + 
           ((i>>8)&0xFF).toString(16) + 
           (i&0xFF).toString(16);
}