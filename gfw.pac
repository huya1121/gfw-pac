var PROXY = {
    "direct":"DIRECT",
    "gfw":"PROXY 127.0.0.1:1080"
};

var DEFAULT = "direct";

var SECTIONS = [
    {
        "name":"direct",
        "proxy":"direct"
    },
    {
        "name":"gfw",
        "proxy":"gfw"
    }
];

var ALL = {
    "direct":{
        "net":[
            // http://en.wikipedia.org/wiki/Reserved_IP_addresses#Reserved_IPv4_addresses
            "0.0.0.0/8",
            "10.0.0.0/8",
            "100.64.0.0/10",
            "127.0.0.0/8",
            "169.254.0.0/16",
            "172.16.0.0/12",
            "192.0.0.0/29",
            "192.0.2.0/24",
            "192.88.99.0/24",
            "192.168.0.0/16",
            "198.18.0.0/15",
            "198.51.100.0/24",
            "203.0.113.0/24",
            "224.0.0.0/4",
            "240.0.0.0/4",
            "255.255.255.255"
        ],
        "domain":[
        ]
    },
    "gfw":{
		    "net":[
			    "24.105.0.0/18",
			    "80.239.208.0/20",
          "182.162.0.0/16",
          "210.242.235.0/24",
          "91.108.56.0/22",
          "91.108.4.0/22",
          "109.239.140.0/24",
          "149.154.160.0/20"
        ],
        "domain":[
            ".21stp.com",
            ".2shared.com",
            ".4bsd.biz",
            ".4shared.com",
            ".8z1.net",
            ".91porn.com",
            ".9bis.com",
            ".9bis.net",
            ".9city.me",
            ".aboluowang.com",
            ".aculo.us",
            ".addthiscdn.com",
            ".analyticsrock.com",
            ".android-x86.org",
            ".android.com",
            ".any.gs",
            ".apigee.com",
            ".appinn.com",
            ".appleactionews.com",
            ".appspot.com",
            ".archive.org",
            ".bbc.co.uk",
            ".bbc.in",
            ".bbcchinese.com",
            ".biantailajiao.com",
            ".bing.com",
            ".bit.ly",
            ".bitbucket.org",
            ".bitly.com",
            ".bitshare.com",
            ".bitsnoop.com",
            ".blip.tv",
            ".blogger.com",
            ".blogimg.jp",
            ".bloglines.com",
            ".blogspot.com",
            ".blogspot.jp",
            ".bloomberg.com",
            ".books.com.tw",
            ".boxun.com",
            ".bullogger.com",
            ".businessweek.com",
            ".careercup.com",
            ".cdn-static.com",
            ".cdn.mozilla.net",
            ".cheezburger.com",
            ".chinadigitaltimes.net",
            ".chinagfw.org",
            ".chinainperspective.com",
            ".chrome.com",
            ".chromium.org",
            ".chzbgr.com",
            ".cl.ly",
            ".cld.me",
            ".cloudfront.net",
            ".collab.net",
            ".cornelcreanga.com",
            ".creaders.net",
            ".cuophiepgiet.net",
            ".cyanogenmod.com",
            ".dabr.co.uk",
            ".dajiyuan.eu",
            ".debian.org",
            ".dhananjaynene.com",
            ".diigo.com",
            ".disqus.com",
            ".dmm.co.jp",
            ".doubleclick.net",
            ".droidvpn.com",
            ".dropbox.com",
            ".dw-world.com",
            ".dw-world.de",
            ".dw.de",
            ".dwnews.com",
            ".dyo.gs",
            ".echofon.com",
            ".eddychan.com",
            ".edubridge.com",
            ".elastic.io",
            ".epfl.ch",
            ".epochtimes.com",
            ".eslite.com",
            ".facebook.com",
            ".facebook.net",
            ".facebookstories.com",
            ".fastly.net",
            ".faststone.org",
            ".favstar.fm",
            ".fb.me",
            ".fbcdn.net",
            ".feedburner.com",
            ".feedly.com",
            ".feedvalidator.org",
            ".filesonic.com",
            ".fnierdster.com",
            ".foursquare.com",
            ".freakshare.com",
            ".free.fr",
            ".friendfeed.com",
            ".ggpht.com",
            ".git-scm.com",
            ".github.com",
            ".globalvoicesonline.org",
            ".golang.org",
            ".goo.gl",
            ".goodreads.com",
            ".google-analytics.com",
            ".google.com",
            ".google.com.hk",
            ".google.com.ph",
            ".googleapis.com",
            ".googlecode.com",
            ".googlegroups.com",
            ".googlelabs.com",
            ".googlepages.com",
            ".googlesource.com",
            ".googlesyndication.com",
            ".googleusercontent.com",
            ".googlevideo.com",
            ".gravatar.com",
            ".gstatic.com",
            ".guao.cc",
            ".guardian.co.uk",
            ".hackdesign.org",
            ".hackerne.ws",
            ".henhengan.com",
            ".hkgolden.com",
            ".hkreporter.com",
            ".hootsuite.com",
            ".hotfile.com",
            ".ht.ly",
            ".i2p2.de",
            ".idv.tw",
            ".igfw.net",
            ".igfw.tk",
            ".igssh.com",
            ".ihavesun2012.com",
            ".imageshack.us",
            ".imagetwist.com",
            ".imdb.com",
            ".img.ly",
            ".imgchili.com",
            ".imgkeep.com",
            ".imgtiger.com",
            ".iphone-dev.org",
            ".ipredator.se",
            ".ironpython.net",
            ".isohunt.com",
            ".j.mp",
            ".jav4you.com",
            ".jingpin.org",
            ".kanzhongguo.com",
            ".keakon.net",
            ".kenengba.com",
            ".laahaa.com",
            ".letscorp.net",
            ".libertytimes.com.tw",
            ".libevent.org",
            ".licdn.com",
            ".lijit.com",
            ".linkedin.com",
            ".live.com",
            ".llvm.org",
            ".lnkd.in",
            ".mail-archive.com",
            ".marguerite.su",
            ".mashable.com",
            ".media.tumblr.com",
            ".mediafire.com",
            ".meijuwo.com",
            ".milewise.com",
            ".mimip2p.net",
            ".mingpao.com",
            ".mitbbs.com",
            ".mobile01.com",
            ".mobileways.de",
            ".mobypicture.com",
            ".multiupload.com",
            ".nabble.com",
            ".ncchinesenews.com",
            ".netvibes.com",
            ".news.pchome.com.tw",
            ".newsblur.com",
            ".newsgator.com",
            ".nextmedia.com",
            ".ning.com",
            ".nodeknockout.com",
            ".npmjs.org",
            ".nyti.ms",
            ".nytimes.com",
            ".oberhumer.com",
            ".ohloh.net",
            ".openhome.cc",
            ".openmymind.net",
            ".openvpn.net",
            ".ow.ly",
            ".owind.com",
            ".page2rss.com",
            ".paper.li",
            ".pastebin.com",
            ".pastie.org",
            ".peacehall.com",
            ".petersons.com",
            ".picplz.com",
            ".pinterest.com",
            ".pixfs.net",
            ".pixnet.net",
            ".plixi.com",
            ".plurk.com",
            ".pocoo.org",
            ".politicalchina.org",
            ".posterous.com",
            ".privatetunnel.com",
            ".pulse.yahoo.com",
            ".qqc.co",
            ".r246.jp",
            ".rapidshare.com",
            ".recaptcha.net",
            ".rene-liu.com",
            ".reuters.com",
            ".rfa.org",
            ".rfi.fr",
            ".rubyinstaller.org",
            ".rudygems.com",
            ".s-msft.com",
            ".s3.amazonaws.com",
            ".scribd.com",
            ".secretchina.com",
            ".sex.com",
            ".shell909090.com",
            ".simplecd.me",
            ".simplecd.org",
            ".slideshare.net",
            ".smf.is",
            ".sns.mx",
            ".snsanalytics.com",
            ".softether.org",
            ".solidot.org.feedsportal.com",
            ".soundofhope.org",
            ".sourceforge.net",
            ".speakerdeck.com",
            ".spinejs.com",
            ".staticflickr.com",
            ".storify.com",
            ".sytes.net",
            ".t.co",
            ".t66y.com",
            ".tabsugar.com",
            ".tampermonkey.net",
            ".telegram.org",
            ".the-big-bang-theory.com",
            ".thechangelog.com",
            ".thepiratebay.org",
            ".thepiratebay.se",
            ".tinybucks.net",
            ".tmblr.co",
            ".topsy.com",
            ".torproject.org",
            ".torrentcrazy.com",
            ".totorojs.org",
            ".touch99.com",
            ".travis-ci.org",
            ".tumblr.com",
            ".tv.com",
            ".twbbs.org.tw",
            ".tweetdeck.com",
            ".tweetmeme.com",
            ".twerpscan.com",
            ".twimg.com",
            ".twitiq.com",
            ".twitlonger.com",
            ".twitpic.com",
            ".twitpicproxy.com",
            ".twitter.com",
            ".twiyia.com",
            ".typekit.com",
            ".typekit.net",
            ".tysurl.com",
            ".udn.com",
            ".udn.com.tw",
            ".uncyclopedia.info",
            ".userstyles.org",
            ".uvnc.com",
            ".uvnc.eu",
            ".uwants.com",
            ".viddler.com",
            ".vimeo.com",
            ".voa.mobi",
            ".voachinese.com",
            ".voachineseblog.com",
            ".voanews.com",
            ".wdfiles.com",
            ".wenweipo.com",
            ".wezone.net",
            ".wikia.com",
            ".wikimedia.org",
            ".wikipedia.org",
            ".wmoov.com",
            ".wordpress.com",
            ".wp.com",
            ".wp.me",
            ".wretch.cc",
            ".wsj.com",
            ".wuala.com",
            ".xuite.net",
            ".xys.org",
            ".yegle.net",
            ".yfrog.com",
            ".yimg.com",
            ".ykhandler.com",
            ".youtu.be",
            ".youtube.com",
            ".ytimg.com",
            ".zeptojs.com",
            ".zff.co",
            ".zhongguotese.net",
            ".zlib.net",
            ".zygote.com",
            ".zygotebody.com",
            "cdn.steamcommunity.com",
            "cdn.steampowered.com",
            "cdn.store.steampowered.com",
            "cl.eye.rs",
            "go.redirectingat.com",
            "tw.myblog.yahoo.com",
        	  ".021gzbb.com",
        	  ".16jiemm.com",
        	  ".99byou.com",
        	  ".blogspot.com.au",
        	  ".cfg2013.com",
        	  ".cloudflare.com",
        	  ".guizubb.net",
        	  ".jetbrains.com",
        	  ".path.com",
        	  ".serverfault.com",
        	  ".shxx.us",
        	  ".sstatic.net",
        	  ".wireshark.org" 
		    ],
        "keyword":[
            "python.org/download/"
        ]
    }
};

function dnsDomainIs(host, pattern) {
    if (pattern.charCodeAt(0) === 46) { // pattern[0] === "."
        return host === pattern.slice(1) ||
            (host.length >= pattern.length && host.substring(host.length - pattern.length) === pattern); // original dnsDomainIs function
    }
    return host === pattern;
}

function keywordMatch(url, pattern) {
    return url.indexOf(pattern) >= 0;
}

function convertAddr(ipchars) {
    var bytes = ipchars.split('.');
    return (((bytes[0] & 0xff) << 24) |
        ((bytes[1] & 0xff) << 16) |
        ((bytes[2] & 0xff) << 8) |
        (bytes[3] & 0xff)) >>> 0;
}

function validateIp(ipaddr) {
    var test = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(ipaddr);
    return !((test == null) || (test[1] > 255 || test[2] > 255 || test[3] > 255 || test[4] > 255));
}

function isInNet(ipaddr, pattern) {
    if (validateIp(ipaddr)) {
        var tmp = pattern.split("/");
        pattern = tmp[0];
        if (validateIp(pattern)) {
            var host = convertAddr(ipaddr),
                pat = convertAddr(pattern),
                mask;
            if (typeof tmp[1] !== "undefined") {
                mask = 32 - tmp[1];
                mask = ((0xffffffff >> mask) << mask) >>> 0;
            }
            else {
                mask = 0xffffffff >>> 0;
            }
            return ((host & mask) == (pat & mask));
        }
    }
    return false;
}

function validatorBuilder(func, str) {
    return function (pattern) {
        return func(str, pattern);
    };
}

function FindProxyForURL(url, host) {
    if (isPlainHostName(host)) {
        return "direct";
    }
    var validators = {
            "net":validatorBuilder(isInNet, host),
            "domain":validatorBuilder(dnsDomainIs, host),
            "keyword":validatorBuilder(keywordMatch, url)
        },
        sectionsLength = SECTIONS.length,
        ruleType,
        rules,
        rulesLength,
        section,
        sectionId,
        sectionName,
        sectionProxy,
        sectionRules,
        ruleId;
    for (sectionId = 0; sectionId < sectionsLength; sectionId += 1) {
        section = SECTIONS[sectionId];
        sectionName = section["name"];
        sectionProxy = section["proxy"];
        if (ALL.hasOwnProperty(sectionName) && PROXY.hasOwnProperty(sectionProxy)) {
            sectionRules = ALL[sectionName];
            for (ruleType in sectionRules) {
                if (sectionRules.hasOwnProperty(ruleType) && validators.hasOwnProperty(ruleType)) {
                    rules = sectionRules[ruleType];
                    rulesLength = rules.length;
                    for (ruleId = 0; ruleId < rulesLength; ruleId += 1) {
                        if (!!((validators[ruleType])(rules[ruleId]))) {
                            return PROXY[sectionProxy];
                        }
                    }
                }
            }
        }
    }
    return PROXY[DEFAULT];
}
