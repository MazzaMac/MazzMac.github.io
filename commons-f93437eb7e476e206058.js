(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8ypT":function(e,t,a){},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=h(t||a||[]);return r&&r.src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),g=function(e){var t=u(e),a=m(t);return p[a]||!1},E="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,w=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+c+l+s+a+r+t+i+n+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},P=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,l=e.ariaHidden,s=c.default.createElement(z,(0,o.default)({ref:t,src:a},i,{ariaHidden:l}));return r.length>1?c.default.createElement("picture",null,n(r),s):s})),z=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},h,{onLoad:l,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));z.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!E&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(E||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,g=e.fixed,E=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,S=e.loading,R=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,o.default)({opacity:k?1:0,transition:O?"opacity "+b+"ms":"none"},s),M="boolean"==typeof E?"lightgray":E,V={transitionDelay:b+"ms"},W=(0,o.default)({opacity:this.state.imgLoaded?0:1},O&&V,s,f),C={title:t,alt:this.state.isVisible?"":a,style:W,className:m,itemProp:w};if(p){var N=p,H=h(p);return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),M&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:M,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&V)}),H.base64&&c.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:C,imageVariants:N,generateSources:L}),H.tracedSVG&&c.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:C,imageVariants:N,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,v(N),c.default.createElement(z,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:R})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:S},H,{imageVariants:N}))}}))}if(g){var j=g,A=h(g),_=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:A.width,height:A.height},i);return"inherit"===i.display&&delete _.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(A.srcSet)},M&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:M,width:A.width,opacity:this.state.imgLoaded?0:1,height:A.height},O&&V)}),A.base64&&c.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:A.base64,spreadProps:C,imageVariants:j,generateSources:L}),A.tracedSVG&&c.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:A.tracedSVG,spreadProps:C,imageVariants:j,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,v(j),c.default.createElement(z,{alt:a,title:t,width:A.width,height:A.height,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:R})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:S},A,{imageVariants:j}))}}))}return null},t}(c.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),M=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function V(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}O.propTypes={resolutions:T,sizes:M,fixed:V(d.default.oneOfType([T,d.default.arrayOf(T)])),fluid:V(d.default.oneOfType([M,d.default.arrayOf(M)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var W=O;t.default=W},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("Wbzz");function l(e){var t=e.currentPath;e.children;function a(e){return t.toString().includes(e)}var r=n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{src:"https://instagram.flba1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/61499335_2268829709849127_6852742186170056704_n.jpg?_nc_ht=instagram.flba1-1.fna.fbcdn.net&_nc_ohc=U-fW_50mv5EAX8RVIR8&oh=9b6770b9af31d61285a2b7b1b5017af6&oe=5F8B72A4"}),n.a.createElement("h3",null,"Projects"),n.a.createElement("ul",null,n.a.createElement("li",null,"Talking Animals"),n.a.createElement("li",null,"Joseph Lister"))),l=n.a.createElement("nav",{style:{margin:"0px auto",marginBottom:"1rem",display:"flex",flexDirection:"column",width:"100%",maxWidth:"960px",alignItems:"flex-start",fontSize:"1.4rem",lineHeight:"1.8rem",fontFamily:"Forum"}},n.a.createElement("li",{className:a("blog")?"current":""},n.a.createElement(i.Link,{to:"/blog"},"Blog")),n.a.createElement("li",{className:a("writing")?"current":""},n.a.createElement(i.Link,{to:"/writing"},"Writing")),n.a.createElement("li",{className:a("art")?"current":""},n.a.createElement(i.Link,{to:"/art"},"Art")),n.a.createElement("li",{className:a("about")?"current":""},n.a.createElement(i.Link,{to:"/about"},"About")),n.a.createElement("li",{className:a("shop")?"current":""},n.a.createElement(i.Link,{to:"/shop"},"Shop")),n.a.createElement("li",{className:a("contact")?"current":""},n.a.createElement(i.Link,{to:"/contact"},"Contact"))),s=n.a.createElement("p",null,"You can buy my art on ",n.a.createElement("a",{href:"https://www.redbubble.com/people/mariannemacrae"},"RedBubble")," or on my etsy store (not real yet, soon though)"),o=n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Blogs"),n.a.createElement("b",null,n.a.createElement("a",{href:"https://www.mochatheweek.com/"},"Mocha The Week"))),c=n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Publications"),n.a.createElement("h3",null,"Poetry"),n.a.createElement("ul",null,n.a.createElement("li",null,"Recital (Forthcoming Pamplet)"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mmu.ac.uk/write/confessions-urbana.php"},"Confessions Urbana"),", ",n.a.createElement("i",null,"Manchester Metropolitan University (#WWWAN, April 2020)")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://inpressbooks.co.uk/collections/all/products/spells"},"Unknown"),", Spells (Inpress Books, Oct 2018)"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.acumen-poetry.co.uk/marianne-macrae/?doing_wp_cron=1600890517.2200870513916015625000"},"Post Walden Pond"),", ",n.a.createElement("i",null,"Acumen")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://shed3.noelchidwick.co.uk/blog/product/multiverse-an-international-anthology-of-science-fiction-poetry/"}),n.a.createElement("i",null,"Multiverse (2018)")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://decoratingdissidence.com/2019/08/31/a-kind-of-fretful-speech/"},'"A kind of fretful speech"'),", ",n.a.createElement("i",null,"Decorating Dissidence (Issue #3)")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://edinburgh-review.com/current-issue/"},"Need to check the title"),", ",n.a.createElement("i",null,'Edinburgh Review (Issue #140 "In-between places")')),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.popshotpopshot.com/posts/20160426-the-pervert/"},"The Pervert"),", ",n.a.createElement("i",null,"Popshot Quarterly")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://untilonlythemountainremains.wordpress.com/jump-into-a-story/watchers/"},"Watchers"),", ",n.a.createElement("i",null,"Until Only the Mountain Remains")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.ed.ac.uk/files/atoms/files/fromarthursseat_2016.pdf"},"January Diary"),", ",n.a.createElement("i",null,"Grierson Verse Prize Winner 2016")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.everywritersresource.com/poemeveryday/nephew-nature-trail-marianne-macrae/"},"The Nephew Nature Trail"),", ",n.a.createElement("i",null,"Every Day Poems"))),n.a.createElement("h3",null,"Academic"),n.a.createElement("ul",null,n.a.createElement("li",null,"Chapter on Elizabeth Bishop (upcoming)")));return n.a.createElement("aside",{id:"sidebar",style:{flex:1,paddingLeft:20,backgroundColor:"#0091AD"}},l,a("blog")&&o,a("writing")&&c,a("about")&&[r,c,o],a("art")&&s,a("shop")&&"shop sidebar",!a("blog")&&!a("writing")&&!a("about")&&!a("art")&&!a("shop")&&r)}function s(){return n.a.createElement("footer",{id:"footer",style:{flexDirection:"row",justifyContent:"space-around"}},n.a.createElement("section",{style:{textAlign:"center"}},n.a.createElement("h3",null,"Follow:"),n.a.createElement("ul",null,n.a.createElement("li",null,"@MarianneMacRaeArt",n.a.createElement("br",null)," on Insta"),n.a.createElement("li",null,"@MarianneMacrae",n.a.createElement("br",null)," on Twitter"))),n.a.createElement("section",null,"© ",(new Date).getFullYear(),", Built by ",n.a.createElement("a",{href:"https://dchitch092.github.io/"},"Richard Hanrahan")," using"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))}a("9eSz");var o=function(e){e.siteTitle,e.currentPath;return n.a.createElement("header",{style:{background:"#0091AD",color:"#F0E5E8"}})};o.defaultProps={siteTitle:""};a("8ypT"),t.a=function(e){var t=e.children,a=e.currentPath,r=Object(i.useStaticQuery)("3649515864");return console.log(r),n.a.createElement(n.a.Fragment,null,n.a.createElement("main",{id:"grid-container",style:{display:"flex",flexDirection:"row"}},n.a.createElement("section",{id:"content",style:{flex:3}},n.a.createElement(i.Link,{to:"/",style:{textDecoration:"none"}},n.a.createElement("h1",{id:"logo"},"Marianne",n.a.createElement("br",null),"MacRae")),n.a.createElement("a",{href:"https://instagram.com/mariannemacraeart",style:{paddingRight:"0.5em",textDecoration:"none"}},n.a.createElement("b",null,"@MarianneMacraeArt")),n.a.createElement("a",{href:"https://twitter.com/MarianneMacRae/",style:{textDecoration:"none"}},n.a.createElement("b",null,"@MarianneMacrae")),n.a.createElement("br",null),n.a.createElement("b",null,"Edinburgh-based writer and illustrator"),n.a.createElement("div",{style:{margin:"0px auto",maxWidth:"960px",marginTop:"2rem",padding:"0px 0 1.45rem 0"}},t)),n.a.createElement(l,{currentPath:a})),n.a.createElement(s,null))}}}]);
//# sourceMappingURL=commons-f93437eb7e476e206058.js.map