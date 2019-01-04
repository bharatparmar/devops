
(function ($) {
  var BrowserClass = {
    init: function() {
      this.classes = [];
      this.agent = navigator.userAgent.toLowerCase();
      this.checkBrowser();
      this.checkPlatform();
      if (this.isMobile(this.classes)) {
        this.classes.push('mobile');
      } else {
        this.classes.push('desktop');
      }
    },

    checkBrowser: function() {
      var matches = Array();
      var aresult = '';
      var aversion = '';
      var resultant = '';

      if (this.agent.match(/msie/)) {
        this.classes.push('ie');

        reg_res = this.agent.match(/.*msie ([0-9]*)\..*/);
        this.classes.push('ie' + reg_res[1]);

      }

      if (this.agent.match(/opera/)) {
        this.classes.push('opera');
        
        aresult = this.stristr(this.agent, 'version').split('/');
        if(aresult[1]) {
          aversion = aresult[1].split(' ');
          this.classes.push('opera' + this.clearVersion(aversion[0]));
        }
      }

      // Chrome is send safari header too
      if (this.agent.match(/chrome/)) {
        this.classes.push('chrome');
        
        aresult = this.stristr(this.agent, 'chrome').split('/');
        aversion = aresult[1].split(' ');
        this.classes.push('chrome' + this.clearVersion(aversion[0]));
        
      } else if (this.agent.match(/safari/)) {
        this.classes.push('safari');
        aresult = this.stristr(this.agent, 'version').split('/');
        
        if(aresult[1]) {
          aversion = aresult[1].split(' ');
          this.classes.push('safari' + this.clearVersion(aversion[0]));
        }
      }

      if (this.agent.match(/netscape/)) {
        this.classes.push('netscape');
        
        matches = this.agent.match(/navigator\/([^ ]*)/);
        if (matches) {
          this.classes.push('netscape' + this.clearVersion(matches[1]));
        }
        else {
          matches = this.agent.match(/netscape6?\/([^ ]*)/);
          if (matches) {
            this.classes.push('netscape' + this.clearVersion(matches[1]));
          }
        }
      }

      if (this.agent.match(/firefox/)) {
        this.classes.push('ff');
        matches = this.agent.match(/firefox[\/ \(]([^ ;\)]+)/);
        if(matches) {
          this.classes.push('ff' + this.clearVersion(matches[1]));
        }
      }

      if (this.agent.match(/konqueror/)) {
        this.classes.push('konqueror');
        
        aresult = this.stristr(this.agent, 'konqueror').split(' ');
        aversion = aresult[0].split('/');
        this.classes.push('konqueror' + this.clearVersion(aversion[1]));
      }

      if (this.agent.match(/dillo/)) {
        this.classes.push('dillo');
      }

      if (this.agent.match(/chimera/)) {
        this.classes.push('chimera');
      }

      if (this.agent.match(/beonex/)) {
        this.classes.push('beonex');
      }

      if (this.agent.match(/aweb/)) {
        this.classes.push('aweb');
      }

      if (this.agent.match(/amaya/)) {
        this.classes.push('amaya');
      }

      if (this.agent.match(/icab/)) {
        this.classes.push('icab');
      }

      if (this.agent.match(/lynx/)) {
        this.classes.push('lynx');
      }

      if (this.agent.match(/galeon/)) {
        this.classes.push('galeon');
      }

      if (this.agent.match(/opera mini/)) {
        this.classes.push('operamini');
        
        resultant = this.stristr(this.agent, 'opera mini');
        if(resultant.match('/\//')) {
          aresult = resultant.split('/');
          aversion = aresult[1].split(' ');
          this.classes.push('operamini' + this.clearVersion(aversion[0]));
        }
        else {
          aversion = this.stristr(resultant, 'opera mini').split(' ');
          this.classes.push('operamini' + this.clearVersion(aversion[1]));
        }
      }
    },

    checkPlatform: function() {
      if (this.agent.match(/windows/)) {
        this.classes.push('win');
      }

      if (this.agent.match(/ipad/)) {
        this.classes.push('ipad');
      }

      if (this.agent.match(/ipod/)) {
        this.classes.push('ipod');
      }

      if (this.agent.match(/iphone/)) {
        this.classes.push('iphone');
      }

      if (this.agent.match(/mac/)) {
        this.classes.push('mac');
      }

      if (this.agent.match(/android/)) {
        this.classes.push('android');
      }

      if (this.agent.match(/linux/)) {
        this.classes.push('linux');
      }

      if (this.agent.match(/nokia/)) {
        this.classes.push('nokia');
      }

      if (this.agent.match(/blackberry/)) {
        this.classes.push('blackberry');
      }

      if (this.agent.match(/freebsd/)) {
        this.classes.push('freebsd');
      }

      if (this.agent.match(/openbsd/)) {
        this.classes.push('openbsd');
      }

      if (this.agent.match(/netbsd/)) {
        this.classes.push('netbsd');
      }
    },

    isMobile: function(classes) {
      var mobile_devices = ['ipad', 'ipod', 'iphone', 'android', 'blackberry', 'operamini'];

      $.each(mobile_devices, function(index, value) {
        if ($.inArray(value, classes) != -1) {
          return true;
        }
      });

      if (this.agent.match(/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|vodafone|o2|pocket|kindle|mobile|pda|psp|treo)/)) {
        return true;
      }
    },
    
    clearVersion: function(version) {
      version = version.replace('/[^0-9,.,a-z,A-Z-]/', '');
      var find = (version + '').indexOf('.');
      return version.substr(0, find);
    },
    
    stristr: function(haystack, needle, bool) {
      // Finds first occurrence of a string within another, case insensitive  
      // 
      // version: 1103.1210
      // discuss at: http://phpjs.org/functions/stristr
      // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
      // +   bugfxied by: Onno Marsman
      // *     example 1: stristr('Kevin van Zonneveld', 'Van');
      // *     returns 1: 'van Zonneveld'
      // *     example 2: stristr('Kevin van Zonneveld', 'VAN', true);
      // *     returns 2: 'Kevin '
      var pos = 0;

      haystack += '';
      pos = haystack.toLowerCase().indexOf((needle + '').toLowerCase());
      if (pos == -1) {
          return false;
      } else {
          if (bool) {
              return haystack.substr(0, pos);
          } else {
              return haystack.slice(pos);
          }
      }
    }

  };

  BrowserClass.init();
  $('body').addClass(BrowserClass.classes.join(' '));
})(jQuery);
;
// $Id: $

function xt_click_wrapper(a, b, c, d, e) {
  //alert('xt_click(' + b + ', ' + c + ', ' + d + ', ' + e + ')');
  //return true;
  return xt_click(a, b, c, d, e);
}

Drupal.behaviors.xitiTrackerAttach = function(context) {

  var xiti = Drupal.settings.xiti;

    
  // Attach onclick event to all links.
  $(xiti.linkSelector, context).click( function() {
    // Expression to check for absolute internal links.
    var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
    // Expression to check for javascript links.
    var isJavascript = new RegExp("^javascript:", "i");
    // Expression to check for download links.
    var isDownload = new RegExp("\\.(" + xiti.trackDownloadExtensions + ")$", "i");
    // Expression to strip invalid chars from string
    var invalidChars = new RegExp("[^a-zA-Z0-9./_~\-]+", "g");

    var xtn2 = '1';
    if (xiti.xtn2) {
      xtn2 = xiti.xtn2;
    }

    // Clics/Navigation : onclick="return xt_click(this,'C','0','nom','N')"
    // Clics/Chargement : onclick="return xt_click(this,'C','1','doc','T')"
    // Clics/Sorties :    onclick="return xt_click(this,'C','1','site_exit','S')"
    // Clics/Actions :    onclick="return xt_click(this,'C','1','lib_action','A')"
    try {
      if (isJavascript.test(this.href)) {
          // No tracking for javascript to avoid conflicting action
          return;
    	  //return xt_click_wrapper(this, 'C', '1', 'lib_javascript', 'A');
      }
      // Is the clicked URL internal?
      else if (isInternal.test(this.href)) {
        // Is download tracking activated and the file extension configured for download tracking?
        if (xiti.trackDownload && isDownload.test(this.href)) {
          // Download link clicked.
          //pageTracker._trackEvent("Downloads", extension[1].toUpperCase(), this.href.replace(isInternal, ''));
          // Clics/Chargement : onclick="return xt_click(this,'C','1','doc','T')"
          //var extension = isDownload.exec(this.href);
          //var click_name = extension[1].toUpperCase();
          var click_name = xiti.sourceLabel;
          if (this.title) {
            var click_name = click_name + '::' + this.title.replace(invalidChars, '_');
          } else {
            var filename = this.href.substring(this.href.lastIndexOf('/')+1);
            var click_name = click_name + '::' + filename.replace(invalidChars, '_');
          }
          return xt_click_wrapper(this, 'C', xtn2, click_name, 'T');
        }
      } 
      else {
        if (xiti.trackMailto && $(this).is("a[href^=mailto:]")) {
          // Mailto link clicked.
          //pageTracker._trackEvent("Mails", "Click", this.href.substring(7));
          // Clics/Actions :    onclick="return xt_click(this,'C','1','lib_action','A')"
          var click_name = xiti.sourceLabel;
          if (this.title) {
            var click_name = click_name + '::' + this.title.replace(invalidChars, '_');
          } else {
            var click_name = click_name + '::' + this.href.replace(invalidChars, '_');
          }
          return xt_click_wrapper(this, 'C', xtn2, click_name, 'A');
        }
        else /*if (xiti.trackOutgoing) */{
        	
          // External link clicked.
          //pageTracker._trackEvent("Outgoing links", "Click", this.href);
          // Clics/Sorties :    onclick="return xt_click(this,'C','1','site_exit','S')"
          var click_name = xiti.sourceLabel + '::' + this.href.replace(invalidChars, '_');
          if (this.title) {
            var click_name = click_name + '::' + this.title.replace(invalidChars, '_');
          } else {
            var click_name = click_name + '::' + this.href.replace(invalidChars, '_');
          }
          return xt_click_wrapper(this, 'C', xtn2, click_name, 'S');
        }
      }
    } catch(err) {}
  });
}
;
