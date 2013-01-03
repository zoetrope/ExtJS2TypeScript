
class MixedStatic{}

module Ext{
    class ElementStatic{}
}

module Ext{
    class EventObjectStatic{}
}

module Ext.data{
    class ProxyStatic{}
}

module Ext{
    class EventedBaseStatic{}
}

class nullStatic{}

class XMLHttpRequestStatic{}

module Ext{
    class PickerStatic{}
}

module Ext.Picker{
    class SlotStatic{}
}

module google.maps{
    class MapStatic{}
}

module google.maps{
    class LatLngStatic{}
}

module Ext.data{
    class RecordStatic{}
}

module Ext{
    class ListStatic{}
}

module Ext{
export class BaseStatic {
// Cfg
// Properties
 self : Ext.ClassStatic;
// Events
// Methods
 callOverridden(args:any /*Array/Arguments*/) : Object;
 callParent(args:any /*Array/Arguments*/) : Object;
 callSuper(args:any /*Array/Arguments*/) : Object;
 getInitialConfig(name:String) : any /*Object/Mixed*/;
 initConfig(instanceConfig:Object) : Object;
 statics() : Ext.ClassStatic;
}
declare var Base : Ext.BaseStatic;
}

module Ext.app{
export class ControllerStatic extends Ext.BaseStatic {
// Cfg
 application : Ext.app.ApplicationStatic;
 before : Object;
 control : Object;
 init : Function;
 launch : Function;
 models : String[];
 refs : Object;
 routes : Object;
 stores : String[];
 views : Array;
// Properties
// Events
// Methods
 getApplication() : Ext.app.ApplicationStatic;
 getBefore() : Object;
 getControl() : Object;
 getController(controllerName:Object,profile:Object) : Object;
 getModel(modelName:Object) : Object;
 getModels() : String[];
 getRefs() : Object;
 getRoutes() : Object;
 getStores() : String[];
 getViews() : Array;
 redirectTo(place:Object) : Object;
 setApplication(application:Ext.app.ApplicationStatic) : void;
 setBefore(before:Object) : void;
 setControl(control:Object) : void;
 setModels(models:String[]) : void;
 setRefs(refs:Object) : void;
 setRoutes(routes:Object) : void;
 setStores(stores:String[]) : void;
 setViews(views:Array) : void;
}
declare var Controller : Ext.app.ControllerStatic;
}

module Ext.app{
export class ApplicationStatic extends Ext.app.ControllerStatic {
// Cfg
 appFolder : String;
 controllers : Array;
 currentProfile : Ext.app.ProfileStatic;
 glossOnIcon : Boolean;
 history : Ext.app.HistoryStatic;
 icon : any /*String/Object*/;
 isIconPrecomposed : Boolean;
 launch : Function;
 name : String;
 phoneIcon : String;
 phoneStartupScreen : String;
 profiles : Array;
 router : Ext.app.RouterStatic;
 startupImage : Object;
 statusBarStyle : String;
 tabletIcon : String;
 tabletStartupScreen : String;
// Properties
// Events
// Methods
 dispatch(action:Ext.app.ActionStatic,addToHistory:Boolean) : void;
 getAppFolder() : String;
 getControllers() : Array;
 getCurrentProfile() : Ext.app.ProfileStatic;
 getHistory() : Ext.app.HistoryStatic;
 getLaunch() : Function;
 getName() : String;
 getProfiles() : Array;
 getRouter() : Ext.app.RouterStatic;
 setAppFolder(appFolder:String) : void;
 setControllers(controllers:Array) : void;
 setCurrentProfile(currentProfile:Ext.app.ProfileStatic) : void;
 setHistory(history:Ext.app.HistoryStatic) : void;
 setLaunch(launch:Function) : void;
 setName(name:String) : void;
 setProfiles(profiles:Array) : void;
 setRouter(router:Ext.app.RouterStatic) : void;
}
declare var Application : Ext.app.ApplicationStatic;
}

module Ext.data.reader{
export class ReaderStatic extends Ext.BaseStatic {
// Cfg
 clientIdProperty : String;
 idProperty : String;
 implicitIncludes : Boolean;
 messageProperty : String;
 root : String;
 rootProperty : String;
 successProperty : String;
 totalProperty : String;
// Properties
 metaData : Object;
 rawData : Object;
// Events
// Methods
 getClientIdProperty() : String;
 getIdProperty() : String;
 getImplicitIncludes() : Boolean;
 getMessageProperty() : String;
 getModel() : Object;
 getResponseData(response:Object) : Object;
 getRootProperty() : String;
 getSuccessProperty() : String;
 getTotalProperty() : String;
 read(response:Object) : Ext.data.ResultSetStatic;
 readRecords(data:Object) : Ext.data.ResultSetStatic;
 setClientIdProperty(clientIdProperty:String) : void;
 setIdProperty(idProperty:String) : void;
 setImplicitIncludes(implicitIncludes:Boolean) : void;
 setMessageProperty(messageProperty:String) : void;
 setModel(model:Object) : void;
 setRootProperty(rootProperty:String) : void;
 setSuccessProperty(successProperty:String) : void;
 setTotalProperty(totalProperty:String) : void;
}
declare var Reader : Ext.data.reader.ReaderStatic;
}

module Ext{
export class EventedStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Evented : Ext.EventedStatic;
}

module Ext{
export class AbstractComponentStatic extends Ext.EventedStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var AbstractComponent : Ext.AbstractComponentStatic;
}

module Ext{
export class ComponentStatic extends Ext.AbstractComponentStatic {
// Cfg
 baseCls : String;
 border : any /*Number/String*/;
 bottom : any /*Number/String*/;
 centered : Boolean;
 cls : any /*String/String[]*/;
 componentCls : String;
 contentEl : any /*Ext.Element/HTMLElement/String*/;
 data : MixedStatic;
 disabled : Boolean;
 disabledCls : String;
 dock : String;
 docked : String;
 draggable : Object;
 enterAnimation : any /*String/Mixed*/;
 exitAnimation : any /*String/Mixed*/;
 flex : Number;
 floating : Boolean;
 floatingCls : String;
 fullscreen : Boolean;
 height : any /*Number/String*/;
 hidden : Boolean;
 hiddenCls : String;
 hideAnimation : any /*String/Mixed*/;
 hideOnMaskTap : Boolean;
 html : any /*String/Ext.Element/HTMLElement*/;
 id : String;
 itemId : String;
 layoutOnOrientationChange : Boolean;
 left : any /*Number/String*/;
 margin : any /*Number/String*/;
 maxHeight : any /*Number/String*/;
 maxWidth : any /*Number/String*/;
 minHeight : any /*Number/String*/;
 minWidth : any /*Number/String*/;
 modal : Boolean;
 monitorOrientation : Boolean;
 padding : any /*Number/String*/;
 plugins : any /*Object/Array*/;
 record : Ext.data.ModelStatic;
 renderTo : Ext.ElementStatic;
 right : any /*Number/String*/;
 scroll : any /*Boolean/String/Object*/;
 showAnimation : any /*String/Mixed*/;
 stopMaskTapEvent : Boolean;
 style : any /*String/Object*/;
 styleHtmlCls : String;
 styleHtmlContent : Boolean;
 top : any /*Number/String*/;
 tpl : any /*String/String[]/Ext.Template[]/Ext.XTemplate[]*/;
 tplWriteMode : String;
 ui : String;
 width : any /*Number/String*/;
 xtype : String;
 zIndex : Number;
// Properties
// Events
 beforeorientationchange(eOpts:Object) : void;
 bottomchange(_this:Ext.ComponentStatic,value:any /*Number/String*/,oldValue:any /*Number/String*/,eOpts:Object) : void;
 centeredchange(_this:Ext.ComponentStatic,value:Boolean,oldValue:Boolean,eOpts:Object) : void;
 disabledchange(_this:Ext.ComponentStatic,value:Boolean,oldValue:Boolean,eOpts:Object) : void;
 dockedchange(_this:Ext.ComponentStatic,value:String,oldValue:String,eOpts:Object) : void;
 erased(_this:Ext.ComponentStatic,eOpts:Object) : void;
 flexchange(_this:Ext.ComponentStatic,value:Number,oldValue:Number,eOpts:Object) : void;
 floatingchange(_this:Ext.ComponentStatic,floating:Boolean,eOpts:Object) : void;
 //fullscreen(_this:Ext.ComponentStatic,eOpts:Object) : void;
 heightchange(_this:Ext.ComponentStatic,value:any /*Number/String*/,oldValue:any /*Number/String*/,eOpts:Object) : void;
 hiddenchange(_this:Ext.ComponentStatic,value:Boolean,oldValue:Boolean,eOpts:Object) : void;
 hide(_this:Ext.ComponentStatic,eOpts:Object) : void;
 initialize(_this:Ext.ComponentStatic,eOpts:Object) : void;
 leftchange(_this:Ext.ComponentStatic,value:any /*Number/String*/,oldValue:any /*Number/String*/,eOpts:Object) : void;
 maxheightchange(_this:Ext.ComponentStatic,value:any /*Number/String*/,oldValue:any /*Number/String*/,eOpts:Object) : void;
 maxwidthchange(_this:Ext.ComponentStatic,value:any /*Number/String*/,oldValue:any /*Number/String*/,eOpts:Object) : void;
 minheightchange(_this:Ext.ComponentStatic,value:any /*Number/String*/,oldValue:any /*Number/String*/,eOpts:Object) : void;
 minwidthchange(_this:Ext.ComponentStatic,value:any /*Number/String*/,oldValue:any /*Number/String*/,eOpts:Object) : void;
 orientationchange(eOpts:Object) : void;
 painted(_this:Ext.ElementStatic,eOpts:Object) : void;
 resize(_this:Ext.ElementStatic,eOpts:Object) : void;
 rightchange(_this:Ext.ComponentStatic,value:any /*Number/String*/,oldValue:any /*Number/String*/,eOpts:Object) : void;
 show(_this:Ext.ComponentStatic,eOpts:Object) : void;
 topchange(_this:Ext.ComponentStatic,value:any /*Number/String*/,oldValue:any /*Number/String*/,eOpts:Object) : void;
 updatedata(_this:Ext.ComponentStatic,newData:Object,eOpts:Object) : void;
 widthchange(_this:Ext.ComponentStatic,value:any /*Number/String*/,oldValue:any /*Number/String*/,eOpts:Object) : void;
// Methods
 addCls(cls:String,prefix:String,suffix:String) : void;
 disable() : void;
 enable() : void;
 getBaseCls() : String;
 getBorder() : any /*Number/String*/;
 getBottom() : any /*Number/String*/;
 getCentered() : Boolean;
 getCls() : any /*String/String[]*/;
 getContentEl() : any /*Ext.Element/HTMLElement/String*/;
 getData() : MixedStatic;
 getDisabled() : Boolean;
 getDisabledCls() : String;
 getDocked() : String;
 getEl() : Ext.dom.ElementStatic;
 getEnterAnimation() : any /*String/Mixed*/;
 getExitAnimation() : any /*String/Mixed*/;
 getFlex() : Number;
 getFloatingCls() : String;
 getHeight() : any /*Number/String*/;
 getHidden() : Boolean;
 getHiddenCls() : String;
 getHideAnimation() : any /*String/Mixed*/;
 getHtml() : any /*String/Ext.Element/HTMLElement*/;
 getItemId() : String;
 getLeft() : any /*Number/String*/;
 getMargin() : any /*Number/String*/;
 getMaxHeight() : any /*Number/String*/;
 getMaxWidth() : any /*Number/String*/;
 getMinHeight() : any /*Number/String*/;
 getMinWidth() : any /*Number/String*/;
 getPadding() : any /*Number/String*/;
 getParent() : Ext.ComponentStatic;
 getPlugins() : any /*Object/Array*/;
 getRecord() : Ext.data.ModelStatic;
 getRenderTo() : Ext.ElementStatic;
 getRight() : any /*Number/String*/;
 getShowAnimation() : any /*String/Mixed*/;
 getSize() : Object;
 getStyle() : any /*String/Object*/;
 getStyleHtmlCls() : String;
 getStyleHtmlContent() : Boolean;
 getTop() : any /*Number/String*/;
 getTpl() : any /*String/String[]/Ext.Template[]/Ext.XTemplate[]*/;
 getTplWriteMode() : String;
 getUi() : String;
 getWidth() : any /*Number/String*/;
 getXTypes() : String;
 getZIndex() : Number;
 hasParent() : Boolean;
 hide(animation:any /*Object/Boolean*/) : Ext.ComponentStatic;
 isDisabled() : Boolean;
 isHidden() : Boolean;
 isXType(xtype:String,shallow:Boolean) : Boolean;
 removeCls(cls:String,prefix:String,suffix:String) : void;
 replaceCls(oldCls:String,newCls:String,prefix:String,suffix:String) : void;
 resetFloating() : void;
 setBaseCls(baseCls:String) : void;
 setBorder(border:any /*Number/String*/) : void;
 setBottom(bottom:any /*Number/String*/) : void;
 setCentered(centered:Boolean) : void;
 setCls(cls:any /*String/String[]*/) : void;
 setContentEl(contentEl:any /*Ext.Element/HTMLElement/String*/) : void;
 setData(data:MixedStatic) : void;
 setDisabled(disabled:Boolean) : void;
 setDisabledCls(disabledCls:String) : void;
 setDocked(docked:String) : void;
 setDraggable(draggable:Object) : void;
 setEnterAnimation(enterAnimation:any /*String/Mixed*/) : void;
 setExitAnimation(exitAnimation:any /*String/Mixed*/) : void;
 setFlex(flex:Number) : void;
 setFloating(floating:Boolean) : void;
 setFloatingCls(floatingCls:String) : void;
 setHeight(height:any /*Number/String*/) : void;
 setHidden(hidden:Boolean) : void;
 setHiddenCls(hiddenCls:String) : void;
 setHideAnimation(hideAnimation:any /*String/Mixed*/) : void;
 setHtml(html:any /*String/Ext.Element/HTMLElement*/) : void;
 setItemId(itemId:String) : void;
 setLeft(left:any /*Number/String*/) : void;
 setMargin(margin:any /*Number/String*/) : void;
 setMaxHeight(maxHeight:any /*Number/String*/) : void;
 setMaxWidth(maxWidth:any /*Number/String*/) : void;
 setMinHeight(minHeight:any /*Number/String*/) : void;
 setMinWidth(minWidth:any /*Number/String*/) : void;
 setPadding(padding:any /*Number/String*/) : void;
 setPlugins(plugins:any /*Object/Array*/) : void;
 setRecord(record:Ext.data.ModelStatic) : void;
 setRenderTo(renderTo:Ext.ElementStatic) : void;
 setRight(right:any /*Number/String*/) : void;
 setScrollable() : void;
 setShowAnimation(showAnimation:any /*String/Mixed*/) : void;
 setSize(width:Number,height:Number) : void;
 setStyle(style:any /*String/Object*/) : void;
 setStyleHtmlCls(styleHtmlCls:String) : void;
 setStyleHtmlContent(styleHtmlContent:Boolean) : void;
 setTop(top:any /*Number/String*/) : void;
 setTpl(tpl:any /*String/String[]/Ext.Template[]/Ext.XTemplate[]*/) : void;
 setTplWriteMode(tplWriteMode:String) : void;
 setUi(ui:String) : void;
 setWidth(width:any /*Number/String*/) : void;
 setZIndex(zIndex:Number) : void;
 show(animation:any /*Object/Boolean*/) : Ext.ComponentStatic;
 showBy(component:Ext.ComponentStatic,alignment:String) : void;
 up(selector:String) : Ext.ContainerStatic;
 update() : void;
 updateStyleHtmlCls(newHtmlCls:Object,oldHtmlCls:Object) : void;
}
declare var Component : Ext.ComponentStatic;
}

module Ext.slider{
export class ThumbStatic extends Ext.ComponentStatic {
// Cfg
 baseCls : String;
 draggable : Object;
// Properties
// Events
// Methods
}
declare var Thumb : Ext.slider.ThumbStatic;
}

module Ext.fx.animation{
export class AbstractStatic extends Ext.EventedStatic {
// Cfg
 before : Object;
 easing : String;
// Properties
// Events
// Methods
 getAfter() : Object;
 getBefore() : Object;
 getDelay() : Number;
 getDirection() : String;
 getDuration() : Number;
 getEasing() : String;
 getElement() : Object;
 getIteration() : Number;
 getName() : String;
 getOnBeforeEnd() : Object;
 getOnBeforeStart() : Object;
 getOnEnd() : Object;
 getPreserveEndState() : Boolean;
 getReplacePrevious() : Boolean;
 getReverse() : Object;
 getScope() : Object;
 setAfter(after:Object) : void;
 setBefore(before:Object) : void;
 setDelay(delay:Number) : void;
 setDirection(direction:String) : void;
 setDuration(duration:Number) : void;
 setEasing(easing:String) : void;
 setElement(element:Object) : void;
 setIteration(iteration:Number) : void;
 setName(name:String) : void;
 setOnBeforeEnd(onBeforeEnd:Object) : void;
 setOnBeforeStart(onBeforeStart:Object) : void;
 setOnEnd(onEnd:Object) : void;
 setPreserveEndState(preserveEndState:Boolean) : void;
 setReplacePrevious(replacePrevious:Boolean) : void;
 setReverse(reverse:Object) : void;
 setScope(scope:Object) : void;
}
declare var Abstract : Ext.fx.animation.AbstractStatic;
}

module Ext.fx.animation{
export class FadeStatic extends Ext.fx.animation.AbstractStatic {
// Cfg
 before : Object;
 out : Boolean;
// Properties
// Events
// Methods
 getOut() : Boolean;
 setOut(out:Boolean) : void;
}
declare var Fade : Ext.fx.animation.FadeStatic;
}

module Ext.fx.animation{
export class FadeOutStatic extends Ext.fx.animation.FadeStatic {
// Cfg
 before : Object;
// Properties
// Events
// Methods
}
declare var FadeOut : Ext.fx.animation.FadeOutStatic;
}

module Ext.plugin{
export class PullRefreshStatic extends Ext.ComponentStatic {
// Cfg
 lastUpdatedText : String;
 list : Ext.dataview.ListStatic;
 loadingText : String;
 pullRefreshText : String;
 pullTpl : any /*Ext.XTemplate/String/Array*/;
 refreshFn : Function;
 releaseRefreshText : String;
 snappingAnimationDuration : Number;
// Properties
// Events
// Methods
 getLastUpdatedText() : String;
 getList() : Ext.dataview.ListStatic;
 getLoadingText() : String;
 getPullRefreshText() : String;
 getPullTpl() : any /*Ext.XTemplate/String/Array*/;
 getRefreshFn() : Function;
 getReleaseRefreshText() : String;
 getSnappingAnimationDuration() : Number;
 setLastUpdatedText(lastUpdatedText:String) : void;
 setList(list:Ext.dataview.ListStatic) : void;
 setLoadingText(loadingText:String) : void;
 setPullRefreshText(pullRefreshText:String) : void;
 setPullTpl(pullTpl:any /*Ext.XTemplate/String/Array*/) : void;
 setRefreshFn(refreshFn:Function) : void;
 setReleaseRefreshText(releaseRefreshText:String) : void;
 setSnappingAnimationDuration(snappingAnimationDuration:Number) : void;
}
declare var PullRefresh : Ext.plugin.PullRefreshStatic;
}

module Ext.event.recognizer{
export class RecognizerStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
 getCallbackScope() : Object;
 getOnFailed() : Object;
 getOnRecognized() : Object;
 setCallbackScope(callbackScope:Object) : void;
 setOnFailed(onFailed:Object) : void;
 setOnRecognized(onRecognized:Object) : void;
}
declare var Recognizer : Ext.event.recognizer.RecognizerStatic;
}

module Ext.event.recognizer{
export class TouchStatic extends Ext.event.recognizer.RecognizerStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Touch : Ext.event.recognizer.TouchStatic;
}

module Ext.event.recognizer{
export class SingleTouchStatic extends Ext.event.recognizer.TouchStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var SingleTouch : Ext.event.recognizer.SingleTouchStatic;
}

module Ext.event.recognizer{
export class SwipeStatic extends Ext.event.recognizer.SingleTouchStatic {
// Cfg
// Properties
// Events
// Methods
 getMaxDuration() : Number;
 getMaxOffset() : Number;
 getMinDistance() : Number;
 setMaxDuration(maxDuration:Number) : void;
 setMaxOffset(maxOffset:Number) : void;
 setMinDistance(minDistance:Number) : void;
}
declare var Swipe : Ext.event.recognizer.SwipeStatic;
}

module Ext.event.recognizer{
export class VerticalSwipeStatic extends Ext.event.recognizer.SwipeStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var VerticalSwipe : Ext.event.recognizer.VerticalSwipeStatic;
}

module Ext.util.sizemonitor{
export class AbstractStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
 getArgs() : Array;
 getCallback() : Object;
 getElement() : Object;
 getScope() : Object;
 setArgs(args:Array) : void;
 setCallback(callback:Object) : void;
 setElement(element:Object) : void;
 setScope(scope:Object) : void;
}
declare var Abstract : Ext.util.sizemonitor.AbstractStatic;
}

module Ext.util.sizemonitor{
export class OverflowChangeStatic extends Ext.util.sizemonitor.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var OverflowChange : Ext.util.sizemonitor.OverflowChangeStatic;
}

module Ext.data{
export class ConnectionStatic extends Ext.BaseStatic {
// Cfg
 defaultHeaders : Object;
 defaultXhrHeader : String;
 disableCaching : Boolean;
 disableCachingParam : String;
 extraParams : Object;
 method : String;
 timeout : Number;
 url : String;
 useDefaultXhrHeader : Boolean;
// Properties
// Events
 beforerequest(conn:Ext.data.ConnectionStatic,options:Object,eOpts:Object) : void;
 requestcomplete(conn:Ext.data.ConnectionStatic,response:Object,options:Object,eOpts:Object) : void;
 requestexception(conn:Ext.data.ConnectionStatic,response:Object,options:Object,eOpts:Object) : void;
// Methods
 abort(request:Object) : void;
 abortAll() : void;
 getAsync() : Boolean;
 getAutoAbort() : Boolean;
 getDefaultHeaders() : Object;
 getDefaultPostHeader() : String;
 getDefaultXhrHeader() : String;
 getDisableCaching() : Boolean;
 getDisableCachingParam() : String;
 getExtraParams() : Object;
 getMethod() : String;
 getPassword() : String;
 getTimeout() : Number;
 getUrl() : String;
 getUseDefaultHeader() : Boolean;
 getUseDefaultXhrHeader() : Boolean;
 getUsername() : String;
 isLoading(request:Object) : Boolean;
 parseStatus(status:Number,xhr:Object) : Object;
 request(options:Object) : any /*Object/null*/;
 setAsync(async:Boolean) : void;
 setAutoAbort(autoAbort:Boolean) : void;
 setDefaultHeaders(defaultHeaders:Object) : void;
 setDefaultPostHeader(defaultPostHeader:String) : void;
 setDefaultXhrHeader(defaultXhrHeader:String) : void;
 setDisableCaching(disableCaching:Boolean) : void;
 setDisableCachingParam(disableCachingParam:String) : void;
 setExtraParams(extraParams:Object) : void;
 setMethod(method:String) : void;
 setOptions(options:Object,scope:Object) : Object;
 setPassword(password:String) : void;
 setTimeout(timeout:Number) : void;
 setUrl(url:String) : void;
 setUseDefaultHeader(useDefaultHeader:Boolean) : void;
 setUseDefaultXhrHeader(useDefaultXhrHeader:Boolean) : void;
 setUsername(username:String) : void;
 upload(form:any /*String/HTMLElement/Ext.Element*/,url:String,params:String,options:Object) : void;
}
declare var Connection : Ext.data.ConnectionStatic;
}

module Ext{
export class AjaxStatic extends Ext.data.ConnectionStatic {
// Cfg
// Properties
 autoAbort : Boolean;
// Events
// Methods
}
declare var Ajax : Ext.AjaxStatic;
}

module Ext.direct{
export class ProviderStatic extends Ext.BaseStatic {
// Cfg
 id : String;
// Properties
// Events
 connect(provider:Ext.direct.ProviderStatic,eOpts:Object) : void;
 data(provider:Ext.direct.ProviderStatic,e:Ext.direct.EventStatic,eOpts:Object) : void;
 disconnect(provider:Ext.direct.ProviderStatic,eOpts:Object) : void;
 exception(eOpts:Object) : void;
// Methods
 connect() : void;
 disconnect() : void;
 isConnected() : Boolean;
}
declare var Provider : Ext.direct.ProviderStatic;
}

module Ext.direct{
export class JsonProviderStatic extends Ext.direct.ProviderStatic {
// Cfg
// Properties
// Events
// Methods
 createEvent(response:Object) : Ext.direct.EventStatic;
}
declare var JsonProvider : Ext.direct.JsonProviderStatic;
}

module Ext{
export class DecoratorStatic extends Ext.ComponentStatic {
// Cfg
 component : Object;
// Properties
// Events
// Methods
 getComponent() : Object;
 setComponent(component:Object) : void;
}
declare var Decorator : Ext.DecoratorStatic;
}

module Ext.field{
export class FieldStatic extends Ext.DecoratorStatic {
// Cfg
 baseCls : String;
 clearIcon : Boolean;
 component : Object;
 fieldCls : String;
 fieldLabel : String;
 inputCls : String;
 inputType : String;
 label : String;
 labelAlign : String;
 labelCls : String;
 labelWidth : any /*Number/String*/;
 labelWrap : Boolean;
 name : String;
 required : Boolean;
 requiredCls : String;
 tabIndex : Number;
 useClearIcon : String;
 value : MixedStatic;
// Properties
 isField : Boolean;
 labelEl : Ext.ElementStatic;
 originalValue : MixedStatic;
// Events
// Methods
 getClearIcon() : Boolean;
 getInputCls() : String;
 getInputType() : String;
 getLabel() : String;
 getLabelAlign() : String;
 getLabelCls() : String;
 getLabelWidth() : any /*Number/String*/;
 getLabelWrap() : Boolean;
 getName() : String;
 getRequired() : Boolean;
 getRequiredCls() : String;
 getTabIndex() : Number;
 getValue() : MixedStatic;
 isDirty() : Boolean;
 reset() : Ext.field.FieldStatic;
 setClearIcon(clearIcon:Boolean) : void;
 setInputCls(inputCls:String) : void;
 setInputType(inputType:String) : void;
 setLabel(label:String) : void;
 setLabelAlign(labelAlign:String) : void;
 setLabelCls(labelCls:String) : void;
 setLabelWidth(labelWidth:any /*Number/String*/) : void;
 setLabelWrap(labelWrap:Boolean) : void;
 setName(name:String) : void;
 setRequired(required:Boolean) : void;
 setRequiredCls(requiredCls:String) : void;
 setTabIndex(tabIndex:Number) : void;
 setValue(value:MixedStatic) : void;
}
declare var Field : Ext.field.FieldStatic;
}

module Ext.field{
export class TextStatic extends Ext.field.FieldStatic {
// Cfg
 autoCapitalize : Boolean;
 autoComplete : Boolean;
 autoCorrect : Boolean;
 bubbleEvents : any /*String/String[]*/;
 clearIcon : Boolean;
 component : Object;
 maxLength : Number;
 placeHolder : String;
 readOnly : Boolean;
 ui : String;
// Properties
 startValue : any /*String/Number*/;
// Events
 action(_this:Ext.field.TextStatic,e:MixedStatic,eOpts:Object) : void;
 blur(_this:Ext.field.TextStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
 change(_this:Ext.field.TextStatic,newValue:MixedStatic,oldValue:MixedStatic,eOpts:Object) : void;
 clearicontap(_this:Ext.field.TextStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
 focus(_this:Ext.field.TextStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
 keyup(_this:Ext.field.TextStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
 mousedown(_this:Ext.field.TextStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
 paste(_this:Ext.field.TextStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
// Methods
 blur() : Ext.field.TextStatic;
 focus() : Ext.field.TextStatic;
 getAutoCapitalize() : Boolean;
 getAutoComplete() : Boolean;
 getAutoCorrect() : Boolean;
 getMaxLength() : Number;
 getPlaceHolder() : String;
 getReadOnly() : Boolean;
 select() : Ext.field.TextStatic;
 setAutoCapitalize(autoCapitalize:Boolean) : void;
 setAutoComplete(autoComplete:Boolean) : void;
 setAutoCorrect(autoCorrect:Boolean) : void;
 setMaxLength(maxLength:Number) : void;
 setPlaceHolder(placeHolder:String) : void;
 setReadOnly(readOnly:Boolean) : void;
}
declare var Text : Ext.field.TextStatic;
}

module Ext.field{
export class TextAreaStatic extends Ext.field.TextStatic {
// Cfg
 autoCapitalize : Boolean;
 component : Object;
 maxRows : Number;
 ui : String;
// Properties
// Events
// Methods
 getMaxRows() : Number;
 setMaxRows(maxRows:Number) : void;
}
declare var TextArea : Ext.field.TextAreaStatic;
}

module Ext{
export class ButtonStatic extends Ext.ComponentStatic {
// Cfg
 autoEvent : String;
 badge : String;
 badgeCls : String;
 badgeText : String;
 baseCls : String;
 handler : Function;
 html : String;
 icon : String;
 iconAlign : String;
 iconCls : String;
 iconMask : Boolean;
 labelCls : String;
 pressedCls : String;
 pressedDelay : any /*Number/Boolean*/;
 scope : Object;
 text : String;
 ui : String;
// Properties
// Events
 release(_this:Ext.ButtonStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
 tap(_this:Ext.ButtonStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
// Methods
 getAutoEvent() : String;
 getBadgeCls() : String;
 getBadgeText() : String;
 getHandler() : Function;
 getIcon() : String;
 getIconAlign() : String;
 getIconCls() : String;
 getIconMask() : Boolean;
 getLabelCls() : String;
 getPressedCls() : String;
 getPressedDelay() : any /*Number/Boolean*/;
 getScope() : Object;
 getText() : String;
 setAutoEvent(autoEvent:String) : void;
 setBadge(text:String) : void;
 setBadgeCls(badgeCls:String) : void;
 setBadgeText(badgeText:String) : void;
 setHandler(handler:Function) : void;
 setIcon(icon:String) : void;
 setIconAlign(iconAlign:String) : void;
 setIconClass(iconClass:String) : void;
 setIconCls(iconCls:String) : void;
 setIconMask(iconMask:Boolean) : void;
 setLabelCls(labelCls:String) : void;
 setPressedCls(pressedCls:String) : void;
 setPressedDelay(pressedDelay:any /*Number/Boolean*/) : void;
 setScope(scope:Object) : void;
 setText(text:String) : void;
}
declare var Button : Ext.ButtonStatic;
}

module Ext.fx{
export class EasingStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(easing:Object);
}
declare var Easing : Ext.fx.EasingStatic;
}

module Ext.data.proxy{
export class ProxyStatic extends Ext.EventedStatic {
// Cfg
 batchActions : Boolean;
 batchOrder : String;
 model : any /*String/Ext.data.Model*/;
 reader : any /*Object/String/Ext.data.reader.Reader*/;
 writer : any /*Object/String/Ext.data.writer.Writer*/;
// Properties
// Events
 metachange(_this:Ext.data.ProxyStatic,data:Object,eOpts:Object) : void;
// Methods
 batch(options:Object) : Ext.data.BatchStatic;
 create(operation:Ext.data.OperationStatic,callback:Function,scope:Object) : void;
 getBatchActions() : Boolean;
 getBatchOrder() : String;
 getModel() : any /*String/Ext.data.Model*/;
 getReader() : any /*Object/String/Ext.data.reader.Reader*/;
 getWriter() : any /*Object/String/Ext.data.writer.Writer*/;
 read(operation:Ext.data.OperationStatic,callback:Function,scope:Object) : void;
 setBatchActions(batchActions:Boolean) : void;
 setBatchOrder(batchOrder:String) : void;
 setModel(model:any /*String/Ext.data.Model*/) : void;
 setReader(reader:any /*Object/String/Ext.data.reader.Reader*/) : void;
 setWriter(writer:any /*Object/String/Ext.data.writer.Writer*/) : void;
 update(operation:Ext.data.OperationStatic,callback:Function,scope:Object) : void;
}
declare var Proxy : Ext.data.proxy.ProxyStatic;
}

module Ext.data.proxy{
export class ServerStatic extends Ext.data.proxy.ProxyStatic {
// Cfg
 api : Object;
 cacheString : String;
 directionParam : String;
 enablePagingParams : Boolean;
 extraParams : Object;
 filterParam : String;
 groupParam : String;
 limitParam : String;
 noCache : Boolean;
 pageParam : String;
 simpleSortMode : Boolean;
 sortParam : String;
 startParam : String;
 timeout : Number;
 url : String;
// Properties
// Events
 exception(_this:Ext.data.proxy.ProxyStatic,response:Object,operation:Ext.data.OperationStatic,eOpts:Object) : void;
// Methods
 afterRequest(request:Ext.data.RequestStatic,success:Boolean) : void;
 buildRequest(operation:Ext.data.OperationStatic) : Ext.data.RequestStatic;
 buildUrl(request:Ext.data.RequestStatic) : String;
 doRequest(operation:Ext.data.OperationStatic,callback:Function,scope:Object) : void;
 encodeFilters(filters:Ext.util.FilterStatic[]) : String;
 encodeSorters(sorters:Ext.util.SorterStatic[]) : String;
 getApi() : Object;
 getCacheString() : String;
 getDirectionParam() : String;
 getEnablePagingParams() : Boolean;
 getExtraParams() : Object;
 getFilterParam() : String;
 getGroupParam() : String;
 getLimitParam() : String;
 getNoCache() : Boolean;
 getPageParam() : String;
 getSimpleSortMode() : Boolean;
 getSortParam() : String;
 getStartParam() : String;
 getTimeout() : Number;
 processResponse(success:Boolean,operation:Ext.data.OperationStatic,request:Ext.data.RequestStatic,response:Object,callback:Function,scope:Object) : void;
 setApi(api:Object) : void;
 setCacheString(cacheString:String) : void;
 setDirectionParam(directionParam:String) : void;
 setEnablePagingParams(enablePagingParams:Boolean) : void;
 setExtraParam(name:String,value:Object) : void;
 setExtraParams(extraParams:Object) : void;
 setFilterParam(filterParam:String) : void;
 setGroupParam(groupParam:String) : void;
 setLimitParam(limitParam:String) : void;
 setNoCache(noCache:Boolean) : void;
 setPageParam(pageParam:String) : void;
 setSimpleSortMode(simpleSortMode:Boolean) : void;
 setSortParam(sortParam:String) : void;
 setStartParam(startParam:String) : void;
 setTimeout(timeout:Number) : void;
 setUrl(url:String) : void;
}
declare var Server : Ext.data.proxy.ServerStatic;
}

module Ext.data.proxy{
export class AjaxStatic extends Ext.data.proxy.ServerStatic {
// Cfg
 headers : Object;
 password : String;
 username : String;
 withCredentials : Boolean;
// Properties
 actionMethods : Object;
// Events
// Methods
 getHeaders() : Object;
 getMethod(request:Ext.data.RequestStatic) : String;
 getPassword() : String;
 getUsername() : String;
 getWithCredentials() : Boolean;
 setHeaders(headers:Object) : void;
 setPassword(password:String) : void;
 setUsername(username:String) : void;
 setWithCredentials(withCredentials:Boolean) : void;
}
declare var Ajax : Ext.data.proxy.AjaxStatic;
}

module Ext.dom{
export class CompositeElementLiteStatic extends Ext.BaseStatic {
// Cfg
// Properties
 elements : HTMLElement[];
// Events
// Methods
 add(els:any /*HTMLElement[]/Ext.dom.CompositeElementLite*/,root:any /*HTMLElement/String*/) : Ext.dom.CompositeElementLiteStatic;
 clear() : void;
 each(fn:Function,scope:Object) : Ext.dom.CompositeElementLiteStatic;
 fill(els:any /*HTMLElement[]/Ext.dom.CompositeElementLite*/) : Ext.dom.CompositeElementLiteStatic;
 filter(selector:any /*String/Function*/) : Ext.dom.CompositeElementLiteStatic;
 getCount() : Number;
 indexOf(el:any /*String/HTMLElement/Ext.Element/Number*/) : Number;
 item(index:Number) : Ext.dom.ElementStatic;
 removeElement(el:any /*String/HTMLElement/Ext.Element/Number*/,removeDom:Boolean) : Ext.dom.CompositeElementLiteStatic;
 replaceElement(el:any /*String/HTMLElement/Ext.Element/Number*/,replacement:any /*String/Ext.Element*/,domReplace:Boolean) : Ext.dom.CompositeElementLiteStatic;
}
declare var CompositeElementLite : Ext.dom.CompositeElementLiteStatic;
}

module Ext.dom{
export class CompositeElementStatic extends Ext.dom.CompositeElementLiteStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var CompositeElement : Ext.dom.CompositeElementStatic;
}

module Ext{
export class ContainerStatic extends Ext.ComponentStatic {
// Cfg
 activeItem : any /*Object/String/Number*/;
 autoDestroy : Boolean;
 cardSwitchAnimation : any /*String/Object/Boolean*/;
 control : Object;
 defaultType : String;
 defaults : Object;
 hideOnMaskTap : Boolean;
 items : any /*Array/Object*/;
 layout : any /*Object/String*/;
 masked : any /*Boolean/Object/Ext.Mask/Ext.LoadMask*/;
 modal : Boolean;
 scroll : any /*Boolean/String/Object*/;
 scrollable : any /*Boolean/String/Object*/;
// Properties
 //items : Ext.util.MixedCollectionStatic;
// Events
 activate(_this:Ext.ContainerStatic,newActiveItem:Object,oldActiveItem:Object,eOpts:Object) : void;
 activeitemchange(_this:Ext.ContainerStatic,value:any /*Object/String/Number*/,oldValue:any /*Object/String/Number*/,eOpts:Object) : void;
 add(_this:Ext.ContainerStatic,item:Object,index:Number,eOpts:Object) : void;
 deactivate(_this:Ext.ContainerStatic,newActiveItem:Object,oldActiveItem:Object,eOpts:Object) : void;
 move(_this:Ext.ContainerStatic,item:Object,toIndex:Number,fromIndex:Number,eOpts:Object) : void;
 remove(_this:Ext.ContainerStatic,item:Object,index:Number,eOpts:Object) : void;
 renderedchange(_this:Ext.ContainerStatic,item:Object,rendered:Boolean,eOpts:Object) : void;
 scrollablechange(_this:Ext.ContainerStatic,value:any /*Boolean/String/Object*/,oldValue:any /*Boolean/String/Object*/,eOpts:Object) : void;
// Methods
 add(newItems:any /*Object/Object[]/Ext.Component/Ext.Component[]*/) : Ext.ComponentStatic;
 addAll(items:Array) : Array;
 animateActiveItem(activeItem:any /*Object/Number*/,animation:any /*Object/Ext.fx.layout.Card*/) : void;
 applyMasked(masked:Object,currentMask:Object) : Object;
 child(selector:String) : Ext.ComponentStatic;
 down(selector:String) : Ext.ComponentStatic;
 getActiveItem() : any /*Object/String/Number*/;
 getAt(index:Number) : Ext.ComponentStatic;
 getAutoDestroy() : Boolean;
 getComponent(component:any /*String/Number*/) : Ext.ComponentStatic;
 getControl() : Object;
 getDefaultType() : String;
 getDefaults() : Object;
 getDockedComponent(component:any /*String/Number*/) : any /*Ext.Component/Boolean*/;
 getDockedItems() : Array;
 getHideOnMaskTap() : Boolean;
 getInnerItems() : Array;
 getItems() : any /*Array/Object*/;
 getMasked() : any /*Boolean/Object/Ext.Mask/Ext.LoadMask*/;
 getModal() : Boolean;
 getScrollable() : Ext.scroll.ViewStatic;
 insert(index:Number,item:Object) : void;
 mask(mask:Object) : void;
 query(selector:String) : Array;
 remove(item:Object,destroy:Boolean) : Ext.ComponentStatic;
 removeAll(destroy:Boolean,everything:Boolean) : Ext.ComponentStatic;
 removeAt(index:Number) : Ext.ContainerStatic;
 removeDocked(item:Object,destroy:Boolean) : Ext.ComponentStatic;
 removeInnerAt(index:Number) : Ext.ContainerStatic;
 setActiveItem(activeItem:any /*Object/String/Number*/) : void;
 setAutoDestroy(autoDestroy:Boolean) : void;
 setControl(control:Object) : void;
 setDefaultType(defaultType:String) : void;
 setDefaults(defaults:Object) : void;
 setHideOnMaskTap(hideOnMaskTap:Boolean) : void;
 setItems(items:any /*Array/Object*/) : void;
 setLayout(layout:any /*Object/String*/) : void;
 setMasked(masked:any /*Boolean/Object/Ext.Mask/Ext.LoadMask*/) : void;
 setModal(modal:Boolean) : void;
 unmask() : void;
}
declare var Container : Ext.ContainerStatic;
}

module Ext.form{
export class FieldSetStatic extends Ext.ContainerStatic {
// Cfg
 baseCls : String;
 instructions : String;
 title : String;
// Properties
// Events
// Methods
 setInstructions(instructions:String) : void;
 setTitle(title:String) : void;
}
declare var FieldSet : Ext.form.FieldSetStatic;
}

module Ext.util.translatable{
export class AbstractStatic extends Ext.EventedStatic {
// Cfg
// Properties
// Events
 animationend(_this:Ext.util.translatable.AbstractStatic,x:Number,y:Number,eOpts:Object) : void;
 animationframe(_this:Ext.util.translatable.AbstractStatic,x:Number,y:Number,eOpts:Object) : void;
 animationstart(_this:Ext.util.translatable.AbstractStatic,x:Number,y:Number,eOpts:Object) : void;
// Methods
 getEasing() : Object;
 getEasingX() : Object;
 getEasingY() : Object;
 getFps() : Object;
 setEasing(easing:Object) : void;
 setEasingX(easingX:Object) : void;
 setEasingY(easingY:Object) : void;
 setFps(fps:Object) : void;
}
declare var Abstract : Ext.util.translatable.AbstractStatic;
}

module Ext.util.translatable{
export class DomStatic extends Ext.util.translatable.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
 getElement() : Object;
 setElement(element:Object) : void;
}
declare var Dom : Ext.util.translatable.DomStatic;
}

module Ext.util.translatable{
export class CssPositionStatic extends Ext.util.translatable.DomStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var CssPosition : Ext.util.translatable.CssPositionStatic;
}

module Ext.data.proxy{
export class ClientStatic extends Ext.data.proxy.ProxyStatic {
// Cfg
// Properties
// Events
// Methods
 clear() : void;
}
declare var Client : Ext.data.proxy.ClientStatic;
}

module Ext.data.proxy{
export class WebStorageStatic extends Ext.data.proxy.ClientStatic {
// Cfg
 enablePagingParams : Boolean;
 id : String;
// Properties
 cache : Object;
// Events
// Methods
 getEnablePagingParams() : Boolean;
 setEnablePagingParams(enablePagingParams:Boolean) : void;
 setRecord(record:Ext.data.ModelStatic,id:String) : void;
}
declare var WebStorage : Ext.data.proxy.WebStorageStatic;
}

module Ext.data.proxy{
export class SessionStorageStatic extends Ext.data.proxy.WebStorageStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var SessionStorage : Ext.data.proxy.SessionStorageStatic;
}

module Ext.fx.layout.card{
export class AbstractStatic extends Ext.EventedStatic {
// Cfg
// Properties
// Events
// Methods
 getDirection() : String;
 getDuration() : Object;
 getLayout() : Object;
 getReverse() : Object;
 setDirection(direction:String) : void;
 setDuration(duration:Object) : void;
 setLayout(layout:Object) : void;
 setReverse(reverse:Object) : void;
}
declare var Abstract : Ext.fx.layout.card.AbstractStatic;
}

module Ext.fx.layout.card{
export class StyleStatic extends Ext.fx.layout.card.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
 getInAnimation() : Object;
 getOutAnimation() : Object;
 setInAnimation(inAnimation:Object) : void;
 setOutAnimation(outAnimation:Object) : void;
}
declare var Style : Ext.fx.layout.card.StyleStatic;
}

module Ext.fx.layout.card{
export class PopStatic extends Ext.fx.layout.card.StyleStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Pop : Ext.fx.layout.card.PopStatic;
}

module Ext.fx{
export class AnimationStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
}
declare var Animation : Ext.fx.AnimationStatic;
}

module Ext.fx.animation{
export class WipeStatic extends Ext.fx.AnimationStatic {
// Cfg
 direction : String;
 easing : String;
 out : Boolean;
// Properties
// Events
// Methods
 getDirection() : String;
 getEasing() : String;
 getOut() : Boolean;
 setDirection(direction:String) : void;
 setEasing(easing:String) : void;
 setOut(out:Boolean) : void;
}
declare var Wipe : Ext.fx.animation.WipeStatic;
}

module Ext.fx.animation{
export class WipeOutStatic extends Ext.fx.animation.WipeStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var WipeOut : Ext.fx.animation.WipeOutStatic;
}

module Ext.event.recognizer{
export class TapStatic extends Ext.event.recognizer.SingleTouchStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Tap : Ext.event.recognizer.TapStatic;
}

module Ext.field{
export class SelectStatic extends Ext.field.TextStatic {
// Cfg
 autoSelect : Boolean;
 defaultPhonePickerConfig : Object;
 defaultTabletPickerConfig : Object;
 displayField : any /*String/Number*/;
 hiddenName : String;
 name : String;
 options : Array;
 store : any /*Ext.data.Store/Object/String*/;
 ui : String;
 usePicker : any /*String/Boolean*/;
 valueField : any /*String/Number*/;
// Properties
// Events
 change(_this:Ext.field.SelectStatic,newValue:MixedStatic,oldValue:MixedStatic,eOpts:Object) : void;
 //focus(_this:Ext.field.SelectStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
// Methods
 getAutoSelect() : Boolean;
 getDefaultPhonePickerConfig() : Object;
 getDefaultTabletPickerConfig() : Object;
 getDisplayField() : any /*String/Number*/;
 getHiddenName() : String;
 getOptions() : Array;
 getStore() : any /*Ext.data.Store/Object/String*/;
 getUsePicker() : any /*String/Boolean*/;
 getValueField() : any /*String/Number*/;
 onStoreDataChanged(store:Object) : void;
 setAutoSelect(autoSelect:Boolean) : void;
 setDefaultPhonePickerConfig(defaultPhonePickerConfig:Object) : void;
 setDefaultTabletPickerConfig(defaultTabletPickerConfig:Object) : void;
 setDisplayField(displayField:any /*String/Number*/) : void;
 setHiddenName(hiddenName:String) : void;
 setOptions(options:Array) : void;
 setStore(store:any /*Ext.data.Store/Object/String*/) : void;
 setUsePicker(usePicker:any /*String/Boolean*/) : void;
 setValueField(valueField:any /*String/Number*/) : void;
 showPicker() : void;
 updateOptions(options:Array) : Ext.field.SelectStatic;
}
declare var Select : Ext.field.SelectStatic;
}

module Ext.device.device{
export class AbstractStatic extends Ext.EventedBaseStatic {
// Cfg
// Properties
 name : String;
 platform : String;
 scheme : any /*Object/Boolean*/;
 uuid : String;
// Events
 schemeupdate(_this:Ext.device.DeviceStatic,scheme:any /*Object/Boolean*/,eOpts:Object) : void;
// Methods
 openURL(url:String) : void;
}
declare var Abstract : Ext.device.device.AbstractStatic;
}

module Ext.device.device{
export class PhoneGapStatic extends Ext.device.device.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var PhoneGap : Ext.device.device.PhoneGapStatic;
}

module Ext{
export class DateStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Date : Ext.DateStatic;
}

module Ext.event.publisher{
export class PublisherStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor();
}
declare var Publisher : Ext.event.publisher.PublisherStatic;
}

module Ext.layout{
export class AbstractStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Abstract : Ext.layout.AbstractStatic;
}

module Ext.layout{
export class DefaultStatic extends Ext.layout.AbstractStatic {
// Cfg
 animation : Ext.fx.layout.CardStatic;
// Properties
// Events
// Methods
 getAnimation() : Ext.fx.layout.CardStatic;
 setAnimation(animation:Ext.fx.layout.CardStatic) : void;
}
declare var Default : Ext.layout.DefaultStatic;
}

module Ext.layout{
export class BoxStatic extends Ext.layout.DefaultStatic {
// Cfg
// Properties
// Events
// Methods
 getAlign() : String;
 getOrient() : String;
 getPack() : String;
 setAlign(align:String) : void;
 setOrient(orient:String) : void;
 setPack(pack:String) : void;
}
declare var Box : Ext.layout.BoxStatic;
}

module Ext.layout{
export class FlexBoxStatic extends Ext.layout.BoxStatic {
// Cfg
// Properties
// Events
// Methods
 setItemFlex(item:Ext.ComponentStatic,flex:Number) : void;
}
declare var FlexBox : Ext.layout.FlexBoxStatic;
}

module ExtStatic {
// Cfg
// Properties
 export var SSL_SECURE_URL : Boolean;
 export var emptyFn : Function;
 export var enableGarbageCollector : Boolean;
 export var enableListenerCollection : Boolean;
 export var enumerables : String[];
 export var frameStartTime : Object;
 export var isSecure : Boolean;
 export var version : String;
// Events
// Methods
 export function application(config:Object) : void;
 export function apply(object:Object,config:Object,defaults:Object) : Object;
 export function applyIf(object:Object,config:Object) : Object;
 export function bind(fn:Function,scope:Object,args:Array,appendArgs:any /*Boolean/Number*/) : Function;
 export function callback(callback:Function,scope:Object,args:Array,delay:Number) : void;
 export function clean(array:Array) : Array;
 export function clone(item:Object) : Object;
 export function copyTo(dest:Object,source:Object,names:any /*String/String[]*/,usePrototypeKeys:Boolean) : Object;
 export function create(name:String,args:MixedStatic) : Object;
 export function createByAlias() : void;
 export function createInterceptor(origFn:Function,newFn:Function,scope:Object,returnValue:Object) : Function;
 export function createWidget() : void;
 export function decode(json:String,safe:Boolean) : any /*Object/null*/;
 export function defer(fn:Function,millis:Number,scope:Object,args:Array,appendArgs:any /*Boolean/Number*/) : Number;
 export function define(className:String,data:Object,createdFn:Function) : Ext.BaseStatic;
 export function destroy(args:MixedStatic[]) : void;
 export function dispatch() : void;
 export function each(iterable:any /*Array/NodeList/Object*/,fn:Function,scope:Object,reverse:Boolean) : Boolean;
 export function encode(o:Object) : String;
 export function exclude(excludes:Array) : Object;
 export function extend(superclass:Function,overrides:Object) : Function;
 export function factory(config:Object,classReference:String,instance:Object,aliasNamespace:Object) : void;
 export function flatten(array:Array) : Array;
 export function fly(element:any /*String/HTMLElement*/,named:String) : Ext.dom.ElementStatic;
 export function get(el:any /*String/HTMLElement/Ext.Element*/) : Ext.dom.ElementStatic;
 export function getBody() : Ext.ElementStatic;
 export function getClass() : void;
 export function getClassName(object:any /*Ext.Class/Object*/) : String;
 export function getCmp(id:String) : Ext.ComponentStatic;
 export function getDisplayName(object:MixedStatic) : String;
 export function getDoc() : Ext.ElementStatic;
 export function getDom(el:MixedStatic) : HTMLElement;
 export function getHead() : Ext.ElementStatic;
 export function getOrientation() : void;
 export function getStore(store:any /*String/Object*/) : Ext.data.StoreStatic;
 export function htmlDecode(value:String) : String;
 export function htmlEncode(value:String) : String;
 export function id(el:MixedStatic,prefix:String) : String;
 export function isArray(target:Object) : Boolean;
 export function isBoolean(value:Object) : Boolean;
 export function isDate(object:Object) : Boolean;
 export function isDefined(value:Object) : Boolean;
 export function isElement(value:Object) : Boolean;
 export function isEmpty(value:Object,allowEmptyString:Boolean) : Boolean;
 export function isFunction(value:Object) : Boolean;
 export function isIterable(value:Object) : Boolean;
 export function isNumber(value:Object) : Boolean;
 export function isNumeric(value:Object) : Boolean;
 export function isObject(value:Object) : Boolean;
 export function isPrimitive(value:Object) : Boolean;
 export function isString(value:Object) : Boolean;
 export function isTextNode(value:Object) : Boolean;
 export function iterate(object:any /*Object/Array*/,fn:Function,scope:Object) : void;
 export function max(array:any /*Array/NodeList*/,comparisonFn:Function) : Object;
 export function mean(array:Array) : Number;
 export function merge() : void;
 export function min(array:any /*Array/NodeList*/,comparisonFn:Function) : Object;
 export function namespace(namespace1:String,namespace2:String,etc:String) : Object;
 export function ns() : void;
 export function num() : void;
 export function onReady(fn:Function,scope:Object,options:Boolean) : void;
 export function override(cls:Object,overrides:Object) : void;
 export function pass(fn:Function,args:Array,scope:Object) : Function;
 export function pluck(array:any /*Array/NodeList*/,propertyName:String) : Array;
 export function preg() : void;
 export function redirect() : void;
 export function reg() : void;
 export function regApplication() : void;
 export function regController() : void;
 export function regLayout() : void;
 export function regModel(name:String,config:Object) : Ext.data.ModelStatic;
 export function regStore(id:String,config:Object) : void;
 export function removeNode(node:HTMLElement) : void;
 export function repaint() : void;
 export function require(expressions:any /*String/Array*/,fn:Function,scope:Object,excludes:any /*String/Array*/) : void;
 export function select(selector:any /*String/HTMLElement[]*/,root:any /*HTMLElement/String*/) : Ext.dom.CompositeElementLiteStatic;
 export function setup(config:Object,isIconPrecomposed:Boolean,statusBarStyle:String) : void;
 export function sum(array:Array) : Number;
 export function syncRequire(expressions:any /*String/Array*/,fn:Function,scope:Object,excludes:any /*String/Array*/) : void;
 export function toArray(iterable:Object,start:Number,end:Number) : Array;
 export function type(value:Object) : String;
 export function typeOf(value:Object) : String;
 export function unique(array:Array) : Array;
 export function urlAppend(url:String,string:String) : String;
 export function urlDecode() : void;
 export function urlEncode() : void;
 export function valueFrom(value:Object,defaultValue:Object,allowBlank:Boolean) : Object;
 export function widget(name:Object) : void;
}
declare var Ext : ExtStatic;

module Ext.event.recognizer{
export class MultiTouchStatic extends Ext.event.recognizer.TouchStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var MultiTouch : Ext.event.recognizer.MultiTouchStatic;
}

module Ext.layout.wrapper{
export class BoxDockStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
 getBodyElement() : Object;
 getContainer() : Object;
 getDirection() : String;
 getElement() : Object;
 getInnerWrapper() : Object;
 getSizeState() : Boolean;
 setBodyElement(bodyElement:Object) : void;
 setContainer(container:Object) : void;
 setDirection(direction:String) : void;
 setElement(element:Object) : void;
 setInnerWrapper(innerWrapper:Object) : void;
 setSizeState(sizeState:Boolean) : void;
}
declare var BoxDock : Ext.layout.wrapper.BoxDockStatic;
}

module Ext.fx.easing{
export class AbstractStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
 getStartTime() : Number;
 getStartValue() : Number;
 setStartTime(startTime:Number) : void;
 setStartValue(startValue:Number) : void;
}
declare var Abstract : Ext.fx.easing.AbstractStatic;
}

module Ext.fx.easing{
export class BounceStatic extends Ext.fx.easing.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
 getAcceleration() : Number;
 getSpringTension() : Number;
 getStartVelocity() : Number;
 setAcceleration(acceleration:Number) : void;
 setSpringTension(springTension:Number) : void;
 setStartVelocity(startVelocity:Number) : void;
}
declare var Bounce : Ext.fx.easing.BounceStatic;
}

module Ext.data{
export class BatchStatic extends Ext.BaseStatic {
// Cfg
 autoStart : Boolean;
 pauseOnException : Boolean;
 proxy : Ext.data.ProxyStatic;
// Properties
 current : Number;
 hasException : Boolean;
 isComplete : Boolean;
 isRunning : Boolean;
 operations : Ext.data.OperationStatic[];
 total : Number;
// Events
 complete(batch:Ext.data.BatchStatic,operation:Object,eOpts:Object) : void;
 exception(batch:Ext.data.BatchStatic,operation:Object,eOpts:Object) : void;
 operationcomplete(batch:Ext.data.BatchStatic,operation:Object,eOpts:Object) : void;
// Methods
 add(operation:Object) : void;
 getAutoStart() : Boolean;
 getPauseOnException() : Boolean;
 getProxy() : Ext.data.ProxyStatic;
 pause() : void;
 runOperation(index:Number) : void;
 setAutoStart(autoStart:Boolean) : void;
 setPauseOnException(pauseOnException:Boolean) : void;
 setProxy(proxy:Ext.data.ProxyStatic) : void;
 start() : void;
}
declare var Batch : Ext.data.BatchStatic;
}

module Ext.device.communicator{
export class DefaultStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Default : Ext.device.communicator.DefaultStatic;
}

module Ext.device.communicator{
export class AndroidStatic extends Ext.device.communicator.DefaultStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Android : Ext.device.communicator.AndroidStatic;
}

module Ext.direct{
export class TransactionStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
 getAction() : Object;
 getArgs() : Object;
 getCallback() : Object;
 getData() : Object;
 getForm() : Object;
 getId() : Object;
 getMethod() : Object;
 getProvider() : Object;
 getRetryCount() : Number;
 setAction(action:Object) : void;
 setArgs(args:Object) : void;
 setCallback(callback:Object) : void;
 setData(data:Object) : void;
 setForm(form:Object) : void;
 setId(id:Object) : void;
 setMethod(method:Object) : void;
 setProvider(provider:Object) : void;
 setRetryCount(retryCount:Number) : void;
}
declare var Transaction : Ext.direct.TransactionStatic;
}

module Ext.device{
export class ContactsStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Contacts : Ext.device.ContactsStatic;
}

module Ext.util{
export class HashMapStatic extends Ext.BaseStatic {
// Cfg
 keyFn : Function;
// Properties
// Events
 add(_this:Ext.util.HashMapStatic,key:String,value:Object,eOpts:Object) : void;
 clear(_this:Ext.util.HashMapStatic,eOpts:Object) : void;
 remove(_this:Ext.util.HashMapStatic,key:String,value:Object,eOpts:Object) : void;
 replace(_this:Ext.util.HashMapStatic,key:String,value:Object,old:Object,eOpts:Object) : void;
// Methods
 add(key:String,value:Object) : Object;
 clear(initial:Object) : Ext.util.HashMapStatic;
 clone() : Ext.util.HashMapStatic;
 contains(value:Object) : Boolean;
 containsKey(key:String) : Boolean;
 each(fn:Function,scope:Object) : Ext.util.HashMapStatic;
 get(key:String) : Object;
 getCount() : Number;
 getKeys() : Array;
 getValues() : Array;
 remove(o:Object) : Boolean;
 removeByKey(key:String) : Boolean;
 replace(key:String,value:Object) : Object;
}
declare var HashMap : Ext.util.HashMapStatic;
}

module Ext.carousel{
export class CarouselStatic extends Ext.ContainerStatic {
// Cfg
 baseCls : String;
 direction : String;
 indicator : Boolean;
 ui : String;
// Properties
// Events
// Methods
 getActiveIndex() : Number;
 getAnimation() : Object;
 getBufferSize() : Number;
 getDirection() : String;
 getDirectionLock() : Boolean;
 getIndicator() : Boolean;
 getItemConfig() : Object;
 getItemLength() : Object;
 isHorizontal() : Boolean;
 isVertical() : Boolean;
 next() : Ext.carousel.CarouselStatic;
 prev() : Ext.carousel.CarouselStatic;
 previous() : Ext.carousel.CarouselStatic;
 setAnimation(animation:Object) : void;
 setBufferSize(bufferSize:Number) : void;
 setDirection(direction:String) : void;
 setDirectionLock(directionLock:Boolean) : void;
 setIndicator(indicator:Boolean) : void;
 setItemConfig(itemConfig:Object) : void;
 setItemLength(itemLength:Object) : void;
}
declare var Carousel : Ext.carousel.CarouselStatic;
}

module Ext.carousel{
export class InfiniteStatic extends Ext.carousel.CarouselStatic {
// Cfg
 indicator : Boolean;
// Properties
// Events
// Methods
 getInnerItemConfig() : Object;
 setInnerItemConfig(innerItemConfig:Object) : void;
 setMaxItemIndex(maxItemIndex:Object) : void;
}
declare var Infinite : Ext.carousel.InfiniteStatic;
}

module Ext.util{
export class AbstractMixedCollectionStatic extends Ext.BaseStatic {
// Cfg
 allowFunctions : Boolean;
// Properties
// Events
 add(index:Number,o:Object,key:String,eOpts:Object) : void;
 clear(eOpts:Object) : void;
 remove(o:Object,key:String,eOpts:Object) : void;
 replace(key:String,old:Object,_new:Object,eOpts:Object) : void;
// Methods
 add(key:String,o:Object) : Object;
 addAll(objs:any /*Object/Array*/) : void;
 clear() : void;
 clone() : Ext.util.MixedCollectionStatic;
 collect(property:String,root:String,allowBlank:Boolean) : Array;
 contains(o:Object) : Boolean;
 containsKey(key:String) : Boolean;
 each(fn:Function,scope:Object) : void;
 eachKey(fn:Function,scope:Object) : void;
 filter(property:any /*Ext.util.Filter[]/String*/,value:any /*String/RegExp*/,anyMatch:Boolean,caseSensitive:Boolean) : Ext.util.MixedCollectionStatic;
 filterBy(fn:Function,scope:Object) : Ext.util.MixedCollectionStatic;
 findBy(fn:Function,scope:Object) : Object;
 findIndex(property:String,value:any /*String/RegExp*/,start:Number,anyMatch:Boolean,caseSensitive:Boolean) : Number;
 findIndexBy(fn:Function,scope:Object,start:Number) : Number;
 first() : Object;
 get(key:any /*String/Number*/) : Object;
 getAt(index:Number) : Object;
 getByKey(key:any /*String/Number*/) : Object;
 getCount() : Number;
 getKey(item:Object) : Object;
 getRange(startIndex:Number,endIndex:Number) : Array;
 indexOf(o:Object) : Number;
 indexOfKey(key:String) : Number;
 insert(index:Number,key:String,o:Object) : Object;
 last() : Object;
 remove(o:Object) : Object;
 removeAll(items:Array) : Ext.util.MixedCollectionStatic;
 removeAt(index:Number) : any /*Object/Boolean*/;
 removeAtKey(key:String) : any /*Object/Boolean*/;
 replace(key:String,o:Object) : Object;
 sum(property:String,root:String,start:Number,end:Number) : Number;
}
declare var AbstractMixedCollection : Ext.util.AbstractMixedCollectionStatic;
}

/* internal JS type: Date*/module Ext.dom{
export class ElementStatic extends Ext.BaseStatic {
// Cfg
// Properties
 DISPLAY : Number;
 OFFSETS : Number;
 VISIBILITY : Number;
 defaultUnit : String;
 dom : HTMLElement;
 id : String;
// Events
 doubletap(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 drag(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 dragend(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 dragstart(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 longpress(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 painted(_this:Ext.ElementStatic,eOpts:Object) : void;
 pinch(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 pinchend(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 pinchstart(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 resize(_this:Ext.ElementStatic,eOpts:Object) : void;
 rotate(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 rotateend(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 rotatestart(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 singletap(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 swipe(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 tap(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 tapcancel(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 taphold(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 tapstart(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 touchmove(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
 touchstart(event:Ext.event.EventStatic,node:HTMLElement,options:Object,eOpts:Object) : void;
// Methods
 addCls(names:String,prefix:String,suffix:String) : Ext.dom.ElementStatic;
 appendChild(element:any /*HTMLElement/Ext.dom.Element*/) : Ext.dom.ElementStatic;
 appendTo(el:any /*String/HTMLElement/Ext.dom.Element*/) : Ext.dom.ElementStatic;
 applyStyles(styles:any /*String/Object/Function*/) : Ext.dom.ElementStatic;
 child(selector:String,returnDom:Boolean) : any /*HTMLElement/Ext.dom.Element*/;
 contains(element:any /*HTMLElement/String*/) : Boolean;
 createChild(config:Object,insertBefore:HTMLElement,returnDom:Boolean) : Ext.dom.ElementStatic;
 cssTranslate() : void;
 down(selector:String,returnDom:Boolean) : any /*HTMLElement/Ext.dom.Element*/;
 findParent(selector:String,maxDepth:any /*Number/String/HTMLElement/Ext.Element*/,returnEl:Boolean) : any /*HTMLElement/null*/;
 findParentNode(selector:String,maxDepth:any /*Number/String/HTMLElement/Ext.Element*/,returnEl:Boolean) : any /*HTMLElement/null*/;
 first(selector:String,returnDom:Boolean) : any /*Ext.dom.Element/HTMLElement/null*/;
 getAlignToXY(element:MixedStatic,position:String,offsets:Array) : Array;
 getAnchorXY(anchor:String,local:Boolean,size:Object) : Array;
 getAttribute(name:String,namespace:String) : String;
 getBorderWidth(side:String) : Number;
 getBottom() : Number;
 getBox(contentBox:Boolean,local:Boolean) : Object;
 getHTML() : String;
 getHeight(contentHeight:Boolean) : Number;
 getHtml() : String;
 getLeft() : Number;
 getMargin(sides:String) : any /*Object/Number*/;
 getOffsetsTo(element:MixedStatic) : Array;
 getOuterHeight() : void;
 getOuterWidth() : void;
 getPadding(side:String) : Number;
 getPageBox(asRegion:Boolean) : Object;
 getRight() : Number;
 getScrollParent() : void;
 getSize(contentSize:Boolean) : Object;
 getStyle(prop:String) : String;
 getTop() : Number;
 getValue(asNumber:Boolean) : any /*String/Number*/;
 getViewSize() : Object;
 getWidth(contentWidth:Boolean) : Number;
 getX(el:Object) : Number;
 getXY() : Array;
 getY(el:Object) : Number;
 hasCls(className:String) : Boolean;
 hide() : void;
 insertAfter(el:any /*String/HTMLElement/Ext.dom.Element*/) : Ext.dom.ElementStatic;
 insertBefore(el:any /*String/HTMLElement/Ext.dom.Element*/) : Ext.dom.ElementStatic;
 insertFirst(element:any /*String/HTMLElement/Ext.dom.Element*/) : Ext.dom.ElementStatic;
 insertHtml(where:String,html:String,returnEl:Boolean) : any /*HTMLElement/Ext.dom.Element*/;
 insertSibling(el:any /*String/HTMLElement/Ext.dom.Element/Object/Array*/,where:String,returnDom:Boolean) : Ext.dom.ElementStatic;
 is(selector:String) : Boolean;
 isDescendent() : void;
 isStyle(style:String,value:String) : Boolean;
 isTransparent(prop:String) : Boolean;
 last(selector:String,returnDom:Boolean) : any /*Ext.dom.Element/HTMLElement/null*/;
 mask() : void;
 next(selector:String,returnDom:Boolean) : any /*Ext.dom.Element/HTMLElement/null*/;
 parent(selector:String,returnDom:Boolean) : any /*Ext.dom.Element/HTMLElement/null*/;
 prev(selector:String,returnDom:Boolean) : any /*Ext.dom.Element/HTMLElement/null*/;
 purgeAllListeners() : void;
 query(selector:String) : HTMLElement[];
 radioCls(className:any /*String/String[]*/) : Ext.dom.ElementStatic;
 remove() : void;
 removeAllListeners() : void;
 removeCls(names:String,prefix:String,suffix:String) : Ext.dom.ElementStatic;
 repaint() : Ext.dom.ElementStatic;
 replace(el:any /*String/HTMLElement/Ext.dom.Element*/) : Ext.dom.ElementStatic;
 replaceCls(oldClassName:String,newClassName:String) : Ext.dom.ElementStatic;
 replaceWith(el:any /*String/HTMLElement/Ext.dom.Element/Object*/) : Ext.dom.ElementStatic;
 select(selector:any /*String/HTMLElement[]*/,root:any /*HTMLElement/String*/) : Ext.dom.CompositeElementLiteStatic;
 serializeForm(form:Object) : String;
 set(attributes:Object,useSet:Boolean) : Ext.dom.ElementStatic;
 setBottom(bottom:String) : Ext.dom.ElementStatic;
 setBox(box:Object) : Ext.dom.ElementStatic;
 setHTML(html:String) : void;
 setHeight(height:any /*Number/String*/) : Ext.dom.ElementStatic;
 setHtml(html:String) : void;
 setLeft(left:String) : Ext.dom.ElementStatic;
 setMaxHeight(height:any /*Number/String*/) : Ext.dom.ElementStatic;
 setMaxWidth(width:any /*Number/String*/) : Ext.dom.ElementStatic;
 setMinHeight(height:any /*Number/String*/) : Ext.dom.ElementStatic;
 setMinWidth(width:any /*Number/String*/) : Ext.dom.ElementStatic;
 setRight(right:String) : Ext.dom.ElementStatic;
 setSize(width:any /*Number/String*/,height:any /*Number/String*/) : Ext.dom.ElementStatic;
 setStyle(property:any /*String/Object*/,value:String) : Ext.dom.ElementStatic;
 setTop(top:String) : Ext.dom.ElementStatic;
 setTopLeft() : void;
 setVisibilityMode(mode:Object) : Ext.dom.ElementStatic;
 setVisible(visible:Boolean) : Ext.ElementStatic;
 setWidth(width:any /*Number/String*/) : Ext.dom.ElementStatic;
 setX(The:Number,animate:any /*Boolean/Object*/) : Ext.dom.ElementStatic;
 setXY(pos:Array,animate:any /*Boolean/Object*/) : Ext.dom.ElementStatic;
 setY(The:Number,animate:any /*Boolean/Object*/) : Ext.dom.ElementStatic;
 show() : void;
 toggleCls(className:String) : Ext.dom.ElementStatic;
 translatePoints(x:any /*Number/Array*/,y:Number) : Object;
 unmask() : void;
 up(selector:String,maxDepth:any /*Number/String/HTMLElement/Ext.Element*/) : any /*Ext.dom.Element/null*/;
 update(html:String) : void;
 wrap(config:Object,domNode:Boolean) : any /*HTMLElement/Ext.dom.Element*/;
}
declare var Element : Ext.dom.ElementStatic;
}

module Ext.fx.easing{
export class LinearStatic extends Ext.fx.easing.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
 getDuration() : Number;
 getEndValue() : Number;
 setDuration(duration:Number) : void;
 setEndValue(endValue:Number) : void;
}
declare var Linear : Ext.fx.easing.LinearStatic;
}

module Ext.fx.easing{
export class EaseInStatic extends Ext.fx.easing.LinearStatic {
// Cfg
// Properties
// Events
// Methods
 getExponent() : Number;
 setExponent(exponent:Number) : void;
}
declare var EaseIn : Ext.fx.easing.EaseInStatic;
}

module Ext.device.orientation{
export class AbstractStatic extends Ext.EventedBaseStatic {
// Cfg
// Properties
// Events
 orientationchange(event:Object,eOpts:Object) : void;
// Methods
}
declare var Abstract : Ext.device.orientation.AbstractStatic;
}

module Ext.device.orientation{
export class SenchaStatic extends Ext.device.orientation.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Sencha : Ext.device.orientation.SenchaStatic;
}

module Ext.layout{
export class VBoxStatic extends Ext.layout.FlexBoxStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var VBox : Ext.layout.VBoxStatic;
}

module Ext.data.identifier{
export class SimpleStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
 getPrefix() : String;
 setPrefix(prefix:String) : void;
}
declare var Simple : Ext.data.identifier.SimpleStatic;
}

module Ext.data.identifier{
export class UuidStatic extends Ext.data.identifier.SimpleStatic {
// Cfg
 id : Object;
 version : Number;
// Properties
 salt : any /*Number/Object*/;
 timestamp : any /*Number/Object*/;
// Events
// Methods
 getId() : Object;
 getVersion() : Number;
 reconfigure(config:Object) : void;
 setId(id:Object) : void;
 setVersion(version:Number) : void;
}
declare var Uuid : Ext.data.identifier.UuidStatic;
}

module Ext.layout{
export class CardStatic extends Ext.layout.DefaultStatic {
// Cfg
// Properties
// Events
 activeitemchange(_this:Ext.layout.CardStatic,newActiveItem:MixedStatic,oldActiveItem:MixedStatic,eOpts:Object) : void;
// Methods
}
declare var Card : Ext.layout.CardStatic;
}

module Ext.field{
export class InputStatic extends Ext.ComponentStatic {
// Cfg
 autoCapitalize : Boolean;
 autoComplete : Boolean;
 autoCorrect : Boolean;
 baseCls : String;
 checked : Boolean;
 cls : String;
 disabled : Boolean;
 focusCls : String;
 maxLength : Number;
 maxRows : Number;
 maxValue : Number;
 minValue : Number;
 name : String;
 pattern : String;
 placeHolder : String;
 readOnly : Boolean;
 startValue : MixedStatic;
 stepValue : Number;
 tabIndex : Number;
 type : String;
 value : MixedStatic;
// Properties
 isFocused : Boolean;
// Events
 blur(e:Ext.EventObjectStatic,eOpts:Object) : void;
 clearicontap(_this:Ext.field.InputStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
 click(e:Ext.EventObjectStatic,eOpts:Object) : void;
 focus(e:Ext.EventObjectStatic,eOpts:Object) : void;
 keyup(e:Ext.EventObjectStatic,eOpts:Object) : void;
 masktap(_this:Ext.field.InputStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
 mousedown(e:Ext.EventObjectStatic,eOpts:Object) : void;
 paste(e:Ext.EventObjectStatic,eOpts:Object) : void;
// Methods
 blur() : Ext.field.InputStatic;
 focus() : Ext.field.InputStatic;
 getAutoCapitalize() : Boolean;
 getAutoComplete() : Boolean;
 getAutoCorrect() : Boolean;
 getChecked() : MixedStatic;
 getFocusCls() : String;
 getMaxLength() : Number;
 getMaxRows() : Number;
 getMaxValue() : Number;
 getMinValue() : Number;
 getName() : String;
 getPattern() : String;
 getPlaceHolder() : String;
 getReadOnly() : Boolean;
 getStartValue() : MixedStatic;
 getStepValue() : Number;
 getTabIndex() : Number;
 getType() : String;
 getValue() : MixedStatic;
 isDirty() : Boolean;
 reset() : void;
 select() : Ext.field.InputStatic;
 setAutoCapitalize(autoCapitalize:Boolean) : void;
 setAutoComplete(autoComplete:Boolean) : void;
 setAutoCorrect(autoCorrect:Boolean) : void;
 setFocusCls(focusCls:String) : void;
 setMaxLength(maxLength:Number) : void;
 setMaxRows(maxRows:Number) : void;
 setMaxValue(maxValue:Number) : void;
 setMinValue(minValue:Number) : void;
 setName(name:String) : void;
 setPattern(pattern:String) : void;
 setPlaceHolder(placeHolder:String) : void;
 setReadOnly(readOnly:Boolean) : void;
 setStartValue(startValue:MixedStatic) : void;
 setStepValue(stepValue:Number) : void;
 setTabIndex(tabIndex:Number) : void;
 setType(type:String) : void;
 updateUseMask(newUseMask:Object) : void;
}
declare var Input : Ext.field.InputStatic;
}

module Ext.env{
export class OSStatic extends Ext.BaseStatic {
// Cfg
// Properties
 name : String;
 version : Ext.VersionStatic;
// Events
// Methods
 constructor(userAgent:Object,platform:Object);
 is(value:String) : Boolean;
}
declare var OS : Ext.env.OSStatic;
}

module Ext{
export class osStatic extends Ext.env.OSStatic {
// Cfg
// Properties
 deviceType : String;
// Events
// Methods
}
declare var os : Ext.osStatic;
}

module Ext.field{
export class CheckboxStatic extends Ext.field.FieldStatic {
// Cfg
 checked : Boolean;
 component : Object;
 ui : String;
 //value : String;
// Properties
// Events
 change(_this:Ext.field.CheckboxStatic,newValue:Boolean,oldValue:Boolean,eOpts:Object) : void;
 check(_this:Ext.field.CheckboxStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
 uncheck(_this:Ext.field.CheckboxStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
// Methods
 check() : Ext.field.CheckboxStatic;
 doChecked() : void;
 doUnChecked() : void;
 getChecked() : MixedStatic;
 getGroupValues() : Array;
 getSubmitValue() : any /*Boolean/String*/;
 isChecked() : Boolean;
 resetGroupValues() : Ext.field.CheckboxStatic;
 setGroupValues(values:Array) : Ext.field.CheckboxStatic;
 uncheck() : Ext.field.CheckboxStatic;
}
declare var Checkbox : Ext.field.CheckboxStatic;
}

module Ext.data{
export class StoreStatic extends Ext.EventedStatic {
// Cfg
 autoLoad : any /*Boolean/Object*/;
 autoSync : Boolean;
 clearOnPageLoad : Boolean;
 data : any /*Object[]/Ext.data.Model[]*/;
 destroyRemovedRecords : Boolean;
 fields : Object[];
 filters : Object[];
 getGroupString : Function;
 groupDir : String;
 groupField : String;
 grouper : Object[];
 model : String;
 pageSize : Number;
 proxy : any /*String/Ext.data.proxy.Proxy/Object*/;
 remoteFilter : Boolean;
 remoteGroup : Boolean;
 remoteSort : Boolean;
 sorters : Object[];
 storeId : String;
 syncRemovedRecords : Boolean;
 totalCount : Number;
// Properties
 currentPage : Number;
// Events
 addrecords(store:Ext.data.StoreStatic,records:Ext.data.ModelStatic[],eOpts:Object) : void;
 beforeload(store:Ext.data.StoreStatic,operation:Ext.data.OperationStatic,eOpts:Object) : void;
 beforesync(options:Object,eOpts:Object) : void;
 clear(_this:Ext.data.StoreStatic,eOpts:Object) : void;
 load(_this:Ext.data.StoreStatic,records:Ext.data.ModelStatic[],successful:Boolean,operation:Ext.data.OperationStatic,eOpts:Object) : void;
 metachange(_this:Ext.data.StoreStatic,data:Object,eOpts:Object) : void;
 refresh(_this:Ext.data.StoreStatic,data:Ext.util.CollectionStatic,eOpts:Object) : void;
 removerecords(store:Ext.data.StoreStatic,records:Ext.data.ModelStatic[],indices:Number[],eOpts:Object) : void;
 update(_this:Ext.data.StoreStatic,record:Ext.data.ModelStatic,newIndex:Number,oldIndex:Number,modifiedFieldNames:Array,modifiedValues:Object,eOpts:Object) : void;
 updaterecord(_this:Ext.data.StoreStatic,record:Ext.data.ModelStatic,newIndex:Number,oldIndex:Number,modifiedFieldNames:Array,modifiedValues:Object,eOpts:Object) : void;
 write(store:Ext.data.StoreStatic,operation:Ext.data.OperationStatic,eOpts:Object) : void;
// Methods
 add(model:any /*Ext.data.Model[]/Ext.data.Model...*/) : Ext.data.ModelStatic[];
 applyData(data:Object) : void;
 average(field:String) : Number;
 clearFilter(suppressEvent:Boolean) : void;
 each(fn:Function,scope:Object) : void;
 filter(filters:any /*Object[]/Ext.util.Filter[]/String*/,value:String,anyMatch:Boolean,caseSensitive:Boolean) : void;
 filterBy(fn:Function,scope:Object) : void;
 find(fieldName:String,value:any /*String/RegExp*/,startIndex:Number,anyMatch:Boolean,caseSensitive:Boolean,exactMatch:Boolean) : Number;
 findBy(fn:Function,scope:Object,startIndex:Number) : Number;
 findExact(fieldName:String,value:Object,startIndex:Number) : Number;
 findRecord(fieldName:String,value:any /*String/RegExp*/,startIndex:Number,anyMatch:Boolean,caseSensitive:Boolean,exactMatch:Boolean) : Ext.data.ModelStatic;
 first() : any /*Ext.data.Model/undefined*/;
 getAllCount() : Number;
 getAt(index:Number) : any /*Ext.data.Model/undefined*/;
 getAutoLoad() : any /*Boolean/Object*/;
 getAutoSync() : Boolean;
 getById(id:String) : any /*Ext.data.Model/undefined*/;
 getClearOnPageLoad() : Boolean;
 getCount() : Number;
 getData() : any /*Object[]/Ext.data.Model[]*/;
 getDestroyRemovedRecords() : Boolean;
 getFields() : Object[];
 getGetGroupString() : Function;
 getGroupDir() : String;
 getGroupField() : String;
 //getGroupString(record:Object) : nullStatic;
 getGrouper() : Object[];
 getGroups(groupName:String) : any /*Object/Object[]*/;
 getModel() : String;
 getModelDefaults() : Object;
 getNewRecords() : Ext.data.ModelStatic[];
 getPageSize() : Number;
 getProxy() : any /*String/Ext.data.proxy.Proxy/Object*/;
 getRange(startIndex:Number,endIndex:Number) : Ext.data.ModelStatic[];
 getRemoteFilter() : Boolean;
 getRemoteGroup() : Boolean;
 getRemoteSort() : Boolean;
 getRemovedRecords() : Ext.data.ModelStatic[];
 getStoreId() : String;
 getSyncRemovedRecords() : Boolean;
 getTotalCount() : Number;
 getUpdatedRecords() : Ext.data.ModelStatic[];
 indexOf(record:Ext.data.ModelStatic) : Number;
 indexOfId(id:String) : Number;
 insert(index:Number,records:Ext.data.ModelStatic[]) : Object;
 isAutoLoading() : Boolean;
 isFiltered() : Boolean;
 isGrouped() : Boolean;
 isLoaded() : Boolean;
 isLoading() : Boolean;
 isSorted() : Boolean;
 last() : any /*Ext.data.Model/undefined*/;
 load(options:any /*Object/Function*/,scope:Object) : Object;
 loadData(data:any /*Ext.data.Model[]/Object[]*/,append:Boolean) : void;
 loadPage(page:Number,options:Object,scope:Object) : void;
 loadRecords(model:any /*Ext.data.Model[]/Ext.data.Model...*/) : Ext.data.ModelStatic[];
 max(field:String) : any /*Object/undefined*/;
 min(field:String) : any /*Object/undefined*/;
 nextPage(options:Object) : void;
 previousPage(options:Object) : void;
 queryBy(fn:Function,scope:Object) : Ext.util.MixedCollectionStatic;
 remove(records:any /*Ext.data.Model/Ext.data.Model[]*/) : void;
 removeAll(silent:Boolean) : void;
 removeAt(index:Number) : void;
 setAutoLoad(autoLoad:any /*Boolean/Object*/) : void;
 setAutoSync(autoSync:Boolean) : void;
 setClearOnPageLoad(clearOnPageLoad:Boolean) : void;
 setData(data:any /*Object[]/Ext.data.Model[]*/) : void;
 setDestroyRemovedRecords(destroyRemovedRecords:Boolean) : void;
 setFields(fields:Object[]) : void;
 setFilters(filters:Object[]) : void;
 setGetGroupString(getGroupString:Function) : void;
 setGroupDir(groupDir:String) : void;
 setGroupField(groupField:String) : void;
 setGrouper(grouper:Object[]) : void;
 setModel(model:String) : void;
 setModelDefaults(modelDefaults:Object) : void;
 setPageSize(pageSize:Number) : void;
 setProxy(proxy:any /*String/Ext.data.proxy.Proxy/Object*/) : void;
 setRemoteFilter(remoteFilter:Boolean) : void;
 setRemoteGroup(remoteGroup:Boolean) : void;
 setRemoteSort(remoteSort:Boolean) : void;
 setSorters(sorters:Object[]) : void;
 setStoreId(storeId:String) : void;
 setSyncRemovedRecords(syncRemovedRecords:Boolean) : void;
 setTotalCount(totalCount:Number) : void;
 sort(sorters:any /*String/Ext.util.Sorter[]*/,defaultDirection:String,where:String) : void;
 sum(field:String) : Number;
 sync() : Object;
}
declare var Store : Ext.data.StoreStatic;
}

module Ext.util{
export class DraggableStatic extends Ext.BaseStatic {
// Cfg
 direction : String;
 initialOffset : any /*Object/Number*/;
// Properties
// Events
 drag(_this:Ext.util.DraggableStatic,e:Ext.event.EventStatic,offsetX:Number,offsetY:Number,eOpts:Object) : void;
 dragend(_this:Ext.util.DraggableStatic,e:Ext.event.EventStatic,offsetX:Number,offsetY:Number,eOpts:Object) : void;
 dragstart(_this:Ext.util.DraggableStatic,e:Ext.event.EventStatic,offsetX:Number,offsetY:Number,eOpts:Object) : void;
// Methods
 disable() : Ext.util.DraggableStatic;
 enable() : Ext.util.DraggableStatic;
 getCls() : String;
 getConstraint() : String;
 getDirection() : String;
 getDisabled() : Object;
 getDraggingCls() : String;
 getElement() : Object;
 getInitialOffset() : any /*Object/Number*/;
 getTranslatable() : Object;
 setCls(cls:String) : void;
 setConstraint(constraint:String) : void;
 setDirection(direction:String) : void;
 setDisabled(disabled:Object) : void;
 setDraggingCls(draggingCls:String) : void;
 setElement(element:Object) : void;
 setInitialOffset(initialOffset:any /*Object/Number*/) : void;
 setTranslatable(translatable:Object) : void;
}
declare var Draggable : Ext.util.DraggableStatic;
}

module Ext.util{
export class FormatStatic extends Ext.BaseStatic {
// Cfg
// Properties
 defaultDateFormat : String;
// Events
// Methods
 date(value:any /*String/Date*/,format:String) : String;
 ellipsis(value:String,length:Number,word:Boolean) : String;
 escape(string:String) : String;
 escapeRegex(str:String) : String;
 format(string:String,values:String[]) : String;
 htmlDecode(value:String) : String;
 htmlEncode(value:String) : String;
 leftPad(string:String,size:Number,char:String) : String;
 toggle(string:String,value:String,other:String) : String;
 trim(string:String) : String;
}
declare var Format : Ext.util.FormatStatic;
}

module Ext.dataview.component{
export class ContainerStatic extends Ext.ContainerStatic {
// Cfg
// Properties
// Events
 itemdoubletap(_this:Ext.dataview.component.ContainerStatic,item:Ext.dataview.component.DataItemStatic,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemsingletap(_this:Ext.dataview.component.ContainerStatic,item:Ext.dataview.component.DataItemStatic,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemswipe(_this:Ext.dataview.component.ContainerStatic,item:Ext.dataview.component.DataItemStatic,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemtap(_this:Ext.dataview.component.ContainerStatic,item:Ext.dataview.component.DataItemStatic,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemtaphold(_this:Ext.dataview.component.ContainerStatic,item:Ext.dataview.component.DataItemStatic,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemtouchend(_this:Ext.dataview.component.ContainerStatic,item:Ext.dataview.component.DataItemStatic,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemtouchmove(_this:Ext.dataview.component.ContainerStatic,item:Ext.dataview.component.DataItemStatic,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemtouchstart(_this:Ext.dataview.component.ContainerStatic,item:Ext.dataview.component.DataItemStatic,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
// Methods
}
declare var Container : Ext.dataview.component.ContainerStatic;
}

module Ext{
export class ArrayStatic {
// Cfg
// Properties
// Events
// Methods
 clean(array:Array) : Array;
 clone(array:Array) : Array;
 contains(array:Array,item:Object) : Boolean;
 difference(arrayA:Array,arrayB:Array) : Array;
 each(iterable:any /*Array/NodeList/Object*/,fn:Function,scope:Object,reverse:Boolean) : Boolean;
 erase(array:Array,index:Number,removeCount:Number) : Array;
 every(array:Array,fn:Function,scope:Object) : Boolean;
 filter(array:Array,fn:Function,scope:Object) : Array;
 flatten(array:Array) : Array;
 forEach(array:Array,fn:Function,scope:Object) : void;
 from(value:Object,newReference:Boolean) : Array;
 include(array:Array,item:Object) : void;
 indexOf(array:Array,item:Object,from:Number) : Number;
 insert(array:Array,index:Number,items:Array) : Array;
 intersect(array1:Array,array2:Array,etc:Array) : Array;
 map(array:Array,fn:Function,scope:Object) : Array;
 max(array:any /*Array/NodeList*/,comparisonFn:Function) : Object;
 mean(array:Array) : Number;
 merge(array1:Array,array2:Array,etc:Array) : Array;
 min(array:any /*Array/NodeList*/,comparisonFn:Function) : Object;
 pluck(array:any /*Array/NodeList*/,propertyName:String) : Array;
 remove(array:Array,item:Object) : Array;
 replace(array:Array,index:Number,removeCount:Number,insert:Array) : Array;
 slice(array:Array,begin:Number,end:Number) : Array;
 some(array:Array,fn:Function,scope:Object) : Boolean;
 sort(array:Array,sortFn:Function) : Array;
 splice(array:Array,index:Number,removeCount:Number) : Array;
 sum(array:Array) : Number;
 toArray(iterable:Object,start:Number,end:Number) : Array;
 union(array1:Array,array2:Array,etc:Array) : Array;
 unique(array:Array) : Array;
}
declare var Array : Ext.ArrayStatic;
}

module Ext{
export class PanelStatic extends Ext.ContainerStatic {
// Cfg
 baseCls : String;
 bodyBorder : any /*Number/Boolean/String*/;
 bodyMargin : any /*Number/Boolean/String*/;
 bodyPadding : any /*Number/Boolean/String*/;
// Properties
// Events
// Methods
 getBodyBorder() : any /*Number/Boolean/String*/;
 getBodyMargin() : any /*Number/Boolean/String*/;
 getBodyPadding() : any /*Number/Boolean/String*/;
 setBodyBorder(bodyBorder:any /*Number/Boolean/String*/) : void;
 setBodyMargin(bodyMargin:any /*Number/Boolean/String*/) : void;
 setBodyPadding(bodyPadding:any /*Number/Boolean/String*/) : void;
}
declare var Panel : Ext.PanelStatic;
}

module Ext{
export class SheetStatic extends Ext.PanelStatic {
// Cfg
 baseCls : String;
 centered : Boolean;
 enter : String;
 exit : String;
 hideAnimation : any /*String/Mixed*/;
 modal : Boolean;
 showAnimation : any /*String/Mixed*/;
 stretchX : Boolean;
 stretchY : Boolean;
// Properties
// Events
 centeredchange(_this:Ext.SheetStatic,value:Boolean,oldValue:Boolean,eOpts:Object) : void;
// Methods
 getEnter() : String;
 getExit() : String;
 getStretchX() : Boolean;
 getStretchY() : Boolean;
 setEnter(enter:String) : void;
 setExit(exit:String) : void;
 setStretchX(stretchX:Boolean) : void;
 setStretchY(stretchY:Boolean) : void;
}
declare var Sheet : Ext.SheetStatic;
}

module Ext.bb{
export class CrossCutStatic extends Ext.SheetStatic {
// Cfg
 defaults : Object;
// Properties
// Events
// Methods
}
declare var CrossCut : Ext.bb.CrossCutStatic;
}

module Ext.data.proxy{
export class DirectStatic extends Ext.data.proxy.ServerStatic {
// Cfg
 api : Object;
 directFn : any /*Function/String*/;
 extraParams : Object;
 paramOrder : any /*String/String[]*/;
 paramsAsHash : Boolean;
// Properties
// Events
// Methods
 getDirectFn() : any /*Function/String*/;
 getParamOrder() : any /*String/String[]*/;
 getParamsAsHash() : Boolean;
 setDirectFn(directFn:any /*Function/String*/) : void;
 setParamOrder(paramOrder:any /*String/String[]*/) : void;
 setParamsAsHash(paramsAsHash:Boolean) : void;
}
declare var Direct : Ext.data.proxy.DirectStatic;
}

module Ext.fx.layout.card{
export class ScrollStatic extends Ext.fx.layout.card.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Scroll : Ext.fx.layout.card.ScrollStatic;
}

module Ext.fx.layout.card{
export class ScrollRevealStatic extends Ext.fx.layout.card.ScrollStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var ScrollReveal : Ext.fx.layout.card.ScrollRevealStatic;
}

module Ext.field{
export class HiddenStatic extends Ext.field.TextStatic {
// Cfg
 component : Object;
 ui : String;
// Properties
// Events
// Methods
}
declare var Hidden : Ext.field.HiddenStatic;
}

module Ext.data{
export class ErrorStatic extends Ext.BaseStatic {
// Cfg
 field : String;
 message : String;
// Properties
// Events
// Methods
 constructor(config:Object);
 getField() : String;
 getMessage() : String;
 setField(field:String) : void;
 setMessage(message:String) : void;
}
declare var Error : Ext.data.ErrorStatic;
}

module Ext.device{
export class ConnectionStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
 onlinechange(online:Boolean,type:String,eOpts:Object) : void;
// Methods
}
declare var Connection : Ext.device.ConnectionStatic;
}

module Ext.device.geolocation{
export class AbstractStatic extends Ext.BaseStatic {
// Cfg
 allowHighAccuracy : Boolean;
 frequency : Number;
 maximumAge : Number;
 timeout : Number;
// Properties
// Events
// Methods
 clearWatch() : void;
 getAllowHighAccuracy() : Boolean;
 getCurrentPosition(config:Object) : void;
 getFrequency() : Number;
 getMaximumAge() : Number;
 getTimeout() : Number;
 setAllowHighAccuracy(allowHighAccuracy:Boolean) : void;
 setFrequency(frequency:Number) : void;
 setMaximumAge(maximumAge:Number) : void;
 setTimeout(timeout:Number) : void;
 watchPosition(config:Object) : void;
}
declare var Abstract : Ext.device.geolocation.AbstractStatic;
}

module Ext.device.geolocation{
export class SimulatorStatic extends Ext.device.geolocation.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Simulator : Ext.device.geolocation.SimulatorStatic;
}

module Ext.util{
export class GeolocationStatic extends Ext.EventedStatic {
// Cfg
 allowHighAccuracy : Boolean;
 autoUpdate : Boolean;
 frequency : Number;
 maximumAge : Number;
 timeout : Number;
// Properties
 accuracy : Number;
 altitude : Number;
 altitudeAccuracy : Number;
 heading : Number;
 latitude : Number;
 longitude : Number;
 speed : Number;
 timestamp : Date;
// Events
 locationerror(_this:Ext.util.GeolocationStatic,timeout:Boolean,permissionDenied:Boolean,locationUnavailable:Boolean,message:String,eOpts:Object) : void;
 locationupdate(_this:Ext.util.GeolocationStatic,eOpts:Object) : void;
// Methods
 getAllowHighAccuracy() : Boolean;
 getAutoUpdate() : Boolean;
 getFrequency() : Number;
 getMaximumAge() : Number;
 getTimeout() : Number;
 setAllowHighAccuracy(allowHighAccuracy:Boolean) : void;
 setAutoUpdate(autoUpdate:Boolean) : void;
 setFrequency(frequency:Number) : void;
 setMaximumAge(maximumAge:Number) : void;
 setTimeout(timeout:Number) : void;
 updateLocation(callback:Function,scope:Object) : void;
}
declare var Geolocation : Ext.util.GeolocationStatic;
}

module Ext.fx.runner{
export class CssStatic extends Ext.EventedStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Css : Ext.fx.runner.CssStatic;
}

module Ext.viewport{
export class DefaultStatic extends Ext.ContainerStatic {
// Cfg
 autoMaximize : Boolean;
 id : String;
 layout : any /*Object/String*/;
 preventPanning : Boolean;
 preventZooming : Boolean;
// Properties
 isReady : Boolean;
// Events
 maximize(_this:Ext.ViewportStatic,eOpts:Object) : void;
 //orientationchange(_this:Ext.ViewportStatic,newOrientation:String,width:Number,height:Number,eOpts:Object) : void;
 ready(_this:Ext.ViewportStatic,eOpts:Object) : void;
// Methods
 getAutoMaximize() : Boolean;
 getOrientation() : String;
 getPreventPanning() : Boolean;
 getPreventZooming() : Boolean;
 getWindowHeight() : Number;
 getWindowWidth() : Number;
 setAutoMaximize(autoMaximize:Boolean) : void;
 setPreventPanning(preventPanning:Boolean) : void;
 setPreventZooming(preventZooming:Boolean) : void;
}
declare var Default : Ext.viewport.DefaultStatic;
}

module Ext.viewport{
export class IosStatic extends Ext.viewport.DefaultStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Ios : Ext.viewport.IosStatic;
}

module Ext.layout.wrapper{
export class DockStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
 getBodyElement() : Object;
 getContainer() : Object;
 getDirection() : String;
 getElement() : Object;
 getInnerWrapper() : Object;
 getSizeState() : Boolean;
 setBodyElement(bodyElement:Object) : void;
 setContainer(container:Object) : void;
 setDirection(direction:String) : void;
 setElement(element:Object) : void;
 setInnerWrapper(innerWrapper:Object) : void;
 setSizeState(sizeState:Boolean) : void;
}
declare var Dock : Ext.layout.wrapper.DockStatic;
}

module Ext{
export class ClassManagerStatic {
// Cfg
// Properties
// Events
// Methods
 addNameAliasMappings(aliases:Object) : Ext.ClassManagerStatic;
 addNameAlternateMappings(alternates:Object) : Ext.ClassManagerStatic;
 get(name:String) : Ext.ClassStatic;
 getAliasesByName(name:String) : Array;
 getByAlias(alias:String) : Ext.ClassStatic;
 getClass(object:Object) : Ext.ClassStatic;
 getName(object:any /*Ext.Class/Object*/) : String;
 getNameByAlias(alias:String) : String;
 getNameByAlternate(alternate:String) : String;
 getNamesByExpression(expression:String) : Array;
 instantiate(name:String,args:MixedStatic) : Object;
 instantiateByAlias(alias:String,args:MixedStatic[]) : Object;
 isCreated(className:String) : Boolean;
 set(name:String,value:Object) : Ext.ClassManagerStatic;
 setAlias(cls:any /*Ext.Class/String*/,alias:String) : Ext.ClassManagerStatic;
 setNamespace(name:String,value:MixedStatic) : void;
}
declare var ClassManager : Ext.ClassManagerStatic;
}

module Ext.dataview{
export class ListItemHeaderStatic extends Ext.ComponentStatic {
// Cfg
 baseCls : String;
 docked : String;
// Properties
// Events
// Methods
}
declare var ListItemHeader : Ext.dataview.ListItemHeaderStatic;
}

module Ext.fx.layout.card{
export class RevealStatic extends Ext.fx.layout.card.StyleStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Reveal : Ext.fx.layout.card.RevealStatic;
}

module Ext.fx.layout.card{
export class SlideStatic extends Ext.fx.layout.card.StyleStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Slide : Ext.fx.layout.card.SlideStatic;
}

module Ext{
export class MessageBoxStatic extends Ext.SheetStatic {
// Cfg
 baseCls : String;
 buttons : any /*Array/Object*/;
 defaultTextHeight : Number;
 hideAnimation : any /*String/Mixed*/;
 icon : String;
 iconCls : String;
 layout : any /*Object/String*/;
 message : String;
 msg : String;
 prompt : Object;
 showAnimation : any /*String/Mixed*/;
 title : String;
 ui : String;
 zIndex : Number;
// Properties
// Events
// Methods
 alert(title:String,message:String,fn:Function,scope:Object) : Ext.MessageBoxStatic;
 confirm(title:String,message:String,fn:Function,scope:Object) : Ext.MessageBoxStatic;
 getButtons() : any /*Array/Object*/;
 getDefaultTextHeight() : Number;
 getPrompt() : Object;
 getTitle() : String;
 //prompt(title:String,message:String,fn:Function,scope:Object,multiLine:any /*Boolean/Number*/,value:String,prompt:Object) : Ext.MessageBoxStatic;
 setButtons(buttons:any /*Array/Object*/) : void;
 setDefaultTextHeight(defaultTextHeight:Number) : void;
 setIcon(icon:String) : Ext.MessageBoxStatic;
 setIconCls(iconCls:String) : void;
 setMessage(message:String) : void;
 setPrompt(prompt:Object) : void;
 setTitle(title:String) : void;
 updateText(message:String) : Ext.MessageBoxStatic;
}
declare var MessageBox : Ext.MessageBoxStatic;
}

module Ext.dataview.component{
export class DataItemStatic extends Ext.ContainerStatic {
// Cfg
 baseCls : String;
 dataMap : Object;
 defaultType : String;
 itemCls : String;
 items : any /*Array/Object*/;
 record : Ext.data.ModelStatic;
// Properties
// Events
 updatedata(_this:Ext.dataview.component.DataItemStatic,newData:Object,eOpts:Object) : void;
// Methods
 getDataMap() : Object;
 getItemCls() : String;
 setDataMap(dataMap:Object) : void;
 setItemCls(itemCls:String) : void;
}
declare var DataItem : Ext.dataview.component.DataItemStatic;
}

module Ext.app{
export class ActionStatic extends Ext.BaseStatic {
// Cfg
 action : String;
 application : Ext.app.ApplicationStatic;
 args : Array;
 beforeFilters : Array;
 controller : Ext.app.ControllerStatic;
 scope : Object;
 url : String;
// Properties
// Events
// Methods
 constructor(config:Object);
 execute() : void;
 getAction() : String;
 getApplication() : Ext.app.ApplicationStatic;
 getArgs() : Array;
 getBeforeFilters() : Array;
 getController() : Ext.app.ControllerStatic;
 getData() : Object;
 getScope() : Object;
 getTitle() : Object;
 getUrl() : String;
 resume() : void;
 setAction(action:String) : void;
 setApplication(application:Ext.app.ApplicationStatic) : void;
 setArgs(args:Array) : void;
 setBeforeFilters(beforeFilters:Array) : void;
 setController(controller:Ext.app.ControllerStatic) : void;
 setData(data:Object) : void;
 setScope(scope:Object) : void;
 setTitle(title:Object) : void;
 setUrl(url:String) : void;
}
declare var Action : Ext.app.ActionStatic;
}

module Ext.app{
export class RouterStatic extends Ext.BaseStatic {
// Cfg
 defaults : Object;
 routes : Array;
// Properties
// Events
// Methods
 constructor(config:Object);
 connect(url:String) : void;
 draw(fn:Function) : void;
 getDefaults() : Object;
 getRoutes() : Array;
 recognize(url:String) : any /*Object/undefined*/;
 setDefaults(defaults:Object) : void;
 setRoutes(routes:Array) : void;
}
declare var Router : Ext.app.RouterStatic;
}

/* internal JS type: Function*/module Ext.behavior{
export class BehaviorStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(component:Object);
}
declare var Behavior : Ext.behavior.BehaviorStatic;
}

module Ext.fx.easing{
export class MomentumStatic extends Ext.fx.easing.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
 getAcceleration() : Number;
 getFriction() : Number;
 getStartVelocity() : Number;
 setAcceleration(acceleration:Number) : void;
 setFriction(friction:Number) : void;
 setStartVelocity(startVelocity:Number) : void;
}
declare var Momentum : Ext.fx.easing.MomentumStatic;
}

module Ext.dataview.component{
export class ListItemStatic extends Ext.dataview.component.DataItemStatic {
// Cfg
 baseCls : String;
 dataMap : Object;
 items : any /*Array/Object*/;
 tpl : any /*String/String[]/Ext.Template[]/Ext.XTemplate[]*/;
// Properties
// Events
 updatedata(_this:Ext.dataview.component.DataItemStatic,newData:Object,eOpts:Object) : void;
// Methods
 getBody() : Object;
 getDisclosure() : Object;
 getHeader() : Object;
 setBody(body:Object) : void;
 setDisclosure(disclosure:Object) : void;
 setHeader(header:Object) : void;
}
declare var ListItem : Ext.dataview.component.ListItemStatic;
}

module Ext.data.proxy{
export class RestStatic extends Ext.data.proxy.AjaxStatic {
// Cfg
 appendId : Boolean;
 batchActions : Boolean;
 format : String;
// Properties
// Events
// Methods
 getActionMethods() : Object;
 getAppendId() : Boolean;
 getFormat() : String;
 setActionMethods(actionMethods:Object) : void;
 setAppendId(appendId:Boolean) : void;
 setFormat(format:String) : void;
}
declare var Rest : Ext.data.proxy.RestStatic;
}

module Ext.dataview{
export class IndexBarStatic extends Ext.ComponentStatic {
// Cfg
 alphabet : Boolean;
 baseCls : String;
 direction : String;
 itemSelector : Boolean;
 letters : Array;
 listPrefix : String;
 store : Boolean;
 ui : String;
// Properties
// Events
 index(_this:Ext.dataview.IndexBarStatic,html:String,target:Ext.dom.ElementStatic,eOpts:Object) : void;
// Methods
 getDirection() : String;
 getLetters() : Array;
 getListPrefix() : String;
 isHorizontal() : void;
 isVertical() : void;
 refresh() : void;
 setDirection(direction:String) : void;
 setLetters(letters:Array) : void;
 setListPrefix(listPrefix:String) : void;
}
declare var IndexBar : Ext.dataview.IndexBarStatic;
}

module Ext.behavior{
export class TranslatableStatic extends Ext.behavior.BehaviorStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Translatable : Ext.behavior.TranslatableStatic;
}

module Ext.data.writer{
export class WriterStatic extends Ext.BaseStatic {
// Cfg
 nameProperty : String;
 writeAllFields : Boolean;
// Properties
// Events
// Methods
 constructor(config:Object);
 getNameProperty() : String;
 getRecordData(record:Object) : Object;
 getWriteAllFields() : Boolean;
 setNameProperty(nameProperty:String) : void;
 setWriteAllFields(writeAllFields:Boolean) : void;
 write(request:Ext.data.RequestStatic) : Ext.data.RequestStatic;
}
declare var Writer : Ext.data.writer.WriterStatic;
}

module Ext.data.writer{
export class JsonStatic extends Ext.data.writer.WriterStatic {
// Cfg
 allowSingle : Boolean;
 encode : Boolean;
 root : String;
 rootProperty : String;
// Properties
// Events
// Methods
 getAllowSingle() : Boolean;
 getEncode() : Boolean;
 getEncodeRequest() : Boolean;
 getRootProperty() : String;
 setAllowSingle(allowSingle:Boolean) : void;
 setEncode(encode:Boolean) : void;
 setEncodeRequest(encodeRequest:Boolean) : void;
 setRootProperty(rootProperty:String) : void;
}
declare var Json : Ext.data.writer.JsonStatic;
}

module Ext.mixin{
export class MixinStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Mixin : Ext.mixin.MixinStatic;
}

module Ext.util{
export class SortableStatic extends Ext.mixin.MixinStatic {
// Cfg
// Properties
 defaultSortDirection : String;
 isSortable : Boolean;
 sortRoot : String;
 sorters : Ext.util.MixedCollectionStatic;
// Events
// Methods
 initSortable() : void;
 sort(sorters:any /*String/Ext.util.Sorter[]*/,direction:String,where:String,doSort:Boolean) : Ext.util.SorterStatic[];
}
declare var Sortable : Ext.util.SortableStatic;
}

module Ext.behavior{
export class DraggableStatic extends Ext.behavior.BehaviorStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Draggable : Ext.behavior.DraggableStatic;
}

module Ext.util.translatable{
export class CssTransformStatic extends Ext.util.translatable.DomStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var CssTransform : Ext.util.translatable.CssTransformStatic;
}

module Ext.device.camera{
export class AbstractStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 capture(options:Object,scope:Object,destination:String,encoding:String,width:Number,height:Number) : void;
}
declare var Abstract : Ext.device.camera.AbstractStatic;
}

module Ext.data.association{
export class AssociationStatic extends Ext.BaseStatic {
// Cfg
 associatedModel : String;
 associatedName : String;
 associationKey : String;
 ownerModel : any /*Ext.data.Model/String*/;
 primaryKey : String;
 reader : Ext.data.reader.ReaderStatic;
 type : String;
// Properties
// Events
// Methods
 constructor(config:Object);
 getAssociatedModel() : String;
 getAssociatedName() : String;
 getAssociationKey() : String;
 getName() : Object;
 getOwnerModel() : any /*Ext.data.Model/String*/;
 getOwnerName() : String;
 getPrimaryKey() : String;
 getReader() : Ext.data.reader.ReaderStatic;
 getType() : String;
 setAssociatedModel(associatedModel:String) : void;
 setAssociatedName(associatedName:String) : void;
 setAssociationKey(associationKey:String) : void;
 setName(name:Object) : void;
 setOwnerModel(ownerModel:any /*Ext.data.Model/String*/) : void;
 setOwnerName(ownerName:String) : void;
 setPrimaryKey(primaryKey:String) : void;
 setReader(reader:Ext.data.reader.ReaderStatic) : void;
 setType(type:String) : void;
}
declare var Association : Ext.data.association.AssociationStatic;
}

module Ext.data.association{
export class BelongsToStatic extends Ext.data.association.AssociationStatic {
// Cfg
 foreignKey : String;
 getterName : String;
 setterName : String;
// Properties
// Events
// Methods
 getForeignKey() : String;
 getGetterName() : String;
 getInstanceName() : Object;
 getSetterName() : String;
 setForeignKey(foreignKey:String) : void;
 setGetterName(getterName:String) : void;
 setInstanceName(instanceName:Object) : void;
 setSetterName(setterName:String) : void;
}
declare var BelongsTo : Ext.data.association.BelongsToStatic;
}

module Ext.mixin{
export class ObservableStatic extends Ext.mixin.MixinStatic {
// Cfg
 bubbleEvents : any /*String/String[]*/;
 listeners : Object;
// Properties
// Events
// Methods
 constructor(config:Object);
 addAfterListener(eventName:any /*String/String[]/Object*/,fn:Function,scope:Object,options:Object) : void;
 addBeforeListener(eventName:any /*String/String[]/Object*/,fn:Function,scope:Object,options:Object) : void;
 addEvents(eventNames:any /*Object/String...*/) : void;
 addListener(eventName:any /*String/String[]/Object*/,fn:Function,scope:Object,options:Object,order:String) : void;
 addManagedListener(object:any /*Ext.mixin.Observable/HTMLElement*/,eventName:any /*Object/String*/,fn:Function,scope:Object,options:Object) : void;
 clearListeners() : void;
 enableBubble(events:any /*String/String[]*/) : void;
 fireAction(eventName:String,args:Array,fn:Function,scope:Object) : Object;
 fireEvent(eventName:String,args:Object[]) : Boolean;
 getBubbleEvents() : any /*String/String[]*/;
 getListeners() : Object;
 hasListener(eventName:String) : Boolean;
 mon(object:any /*Ext.mixin.Observable/HTMLElement*/,eventName:any /*Object/String*/,fn:Function,scope:Object,options:Object) : void;
 mun(object:any /*Ext.mixin.Observable/HTMLElement*/,eventName:any /*Object/String*/,fn:Function,scope:Object) : void;
 on(eventName:any /*String/String[]/Object*/,fn:Function,scope:Object,options:Object,order:String) : void;
 onAfter(eventName:any /*String/String[]/Object*/,fn:Function,scope:Object,options:Object) : void;
 onBefore(eventName:any /*String/String[]/Object*/,fn:Function,scope:Object,options:Object) : void;
 relayEvents(object:Object,events:any /*String/Array/Object*/) : Ext.mixin.ObservableStatic;
 removeAfterListener(eventName:any /*String/String[]/Object*/,fn:Function,scope:Object,options:Object) : void;
 removeBeforeListener(eventName:any /*String/String[]/Object*/,fn:Function,scope:Object,options:Object) : void;
 removeListener(eventName:any /*String/String[]/Object*/,fn:Function,scope:Object,options:Object,order:String) : void;
 removeManagedListener(object:any /*Ext.mixin.Observable/HTMLElement*/,eventName:any /*Object/String*/,fn:Function,scope:Object) : void;
 resumeEvents() : void;
 setBubbleEvents(bubbleEvents:any /*String/String[]*/) : void;
 setListeners(listeners:Object) : void;
 suspendEvents(queueSuspended:Boolean) : void;
 un(eventName:any /*String/String[]/Object*/,fn:Function,scope:Object,options:Object,order:String) : void;
 unAfter(eventName:any /*String/String[]/Object*/,fn:Function,scope:Object,options:Object) : void;
 unBefore(eventName:any /*String/String[]/Object*/,fn:Function,scope:Object,options:Object) : void;
}
declare var Observable : Ext.mixin.ObservableStatic;
}

module Ext.device{
export class CameraStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor();
}
declare var Camera : Ext.device.CameraStatic;
}

module Ext{
export class AbstractManagerStatic extends Ext.BaseStatic {
// Cfg
// Properties
 all : Ext.util.HashMapStatic;
// Events
// Methods
 constructor(config:Object);
 create(config:Object,defaultType:String) : Object;
 each(fn:Function,scope:Object) : void;
 get(id:String) : Object;
 getCount() : Number;
 isRegistered(type:String) : Boolean;
 onAvailable(id:String,fn:Function,scope:Object) : void;
 register(item:Object) : void;
 registerType(type:String,cls:Function) : void;
 unregister(item:Object) : void;
}
declare var AbstractManager : Ext.AbstractManagerStatic;
}

module Ext.data{
export class NodeStoreStatic extends Ext.data.StoreStatic {
// Cfg
 filters : Object[];
 folderSort : Boolean;
 node : Ext.data.ModelStatic;
 recursive : Boolean;
 rootVisible : Boolean;
 sorters : Object[];
// Properties
// Events
// Methods
 getFolderSort() : Boolean;
 getNode() : Ext.data.ModelStatic;
 getRecursive() : Boolean;
 getRootVisible() : Boolean;
 isVisible(node:Object) : Boolean;
 setFolderSort(folderSort:Boolean) : void;
 setNode(node:Ext.data.ModelStatic) : void;
 setRecursive(recursive:Boolean) : void;
 setRootVisible(rootVisible:Boolean) : void;
}
declare var NodeStore : Ext.data.NodeStoreStatic;
}

module Ext{
export class MediaStatic extends Ext.ComponentStatic {
// Cfg
 autoPause : Boolean;
 autoResume : Boolean;
 enableControls : Boolean;
 loop : Boolean;
 media : Ext.ElementStatic;
 muted : Boolean;
 preload : Boolean;
 url : String;
 volume : Number;
// Properties
// Events
 ended(_this:Ext.MediaStatic,time:Number,eOpts:Object) : void;
 mutedchange(_this:Ext.MediaStatic,muted:Boolean,eOpts:Object) : void;
 pause(_this:Ext.MediaStatic,time:Number,eOpts:Object) : void;
 play(_this:Ext.MediaStatic,eOpts:Object) : void;
 stop(_this:Ext.MediaStatic,eOpts:Object) : void;
 timeupdate(_this:Ext.MediaStatic,time:Number,eOpts:Object) : void;
 volumechange(_this:Ext.MediaStatic,volume:Number,eOpts:Object) : void;
// Methods
 getAutoPause() : Boolean;
 getAutoResume() : Boolean;
 getCurrentTime() : Number;
 getDuration() : Number;
 getEnableControls() : Boolean;
 getLoop() : Boolean;
 getMedia() : Ext.ElementStatic;
 getMuted() : Boolean;
 getPreload() : Boolean;
 getUrl() : String;
 getVolume() : Number;
 isPlaying() : Boolean;
 pause() : void;
 play() : void;
 setAutoPause(autoPause:Boolean) : void;
 setAutoResume(autoResume:Boolean) : void;
 setEnableControls(enableControls:Boolean) : void;
 setLoop(loop:Boolean) : void;
 setMedia(media:Ext.ElementStatic) : void;
 setMuted(muted:Boolean) : void;
 setPreload(preload:Boolean) : void;
 setUrl(url:String) : void;
 setVolume(volume:Number) : void;
 stop() : void;
 toggle() : void;
 updateEnableControls(enableControls:Object) : void;
 updateLoop(loop:Object) : void;
 updateUrl(newUrl:Object) : void;
}
declare var Media : Ext.MediaStatic;
}

module Ext{
export class AudioStatic extends Ext.MediaStatic {
// Cfg
 cls : any /*String/String[]*/;
 url : String;
// Properties
// Events
// Methods
}
declare var Audio : Ext.AudioStatic;
}

module Ext{
export class MaskStatic extends Ext.ComponentStatic {
// Cfg
 baseCls : String;
 transparent : Boolean;
// Properties
// Events
 tap(_this:Ext.MaskStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
// Methods
 getTransparent() : Boolean;
 setTransparent(transparent:Boolean) : void;
}
declare var Mask : Ext.MaskStatic;
}

module Ext{
export class LoadMaskStatic extends Ext.MaskStatic {
// Cfg
 indicator : Boolean;
 message : String;
 messageCls : String;
 msg : String;
 msgCls : String;
 store : Ext.data.StoreStatic;
// Properties
// Events
// Methods
 bindStore(store:Ext.data.StoreStatic) : void;
 getIndicator() : Boolean;
 getMessage() : String;
 getMessageCls() : String;
 setIndicator(indicator:Boolean) : void;
 setMessage(message:String) : void;
 setMessageCls(messageCls:String) : void;
}
declare var LoadMask : Ext.LoadMaskStatic;
}

module Ext.slider{
export class SliderStatic extends Ext.ContainerStatic {
// Cfg
 allowThumbsOverlapping : Boolean;
 animation : any /*Boolean/Object*/;
 animationDuration : Boolean;
 baseCls : String;
 increment : Number;
 maxValue : Number;
 minValue : Number;
 readOnly : Boolean;
 thumbConfig : Object;
 value : any /*Number/Number[]*/;
 values : any /*Number/Number[]*/;
// Properties
// Events
 change(_this:Ext.slider.SliderStatic,thumb:Ext.slider.ThumbStatic,newValue:Number,oldValue:Number,eOpts:Object) : void;
 drag(_this:Ext.slider.SliderStatic,thumb:Ext.slider.ThumbStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
 dragend(_this:Ext.slider.SliderStatic,thumb:Ext.slider.ThumbStatic,value:Array,e:Ext.EventObjectStatic,eOpts:Object) : void;
 dragstart(_this:Ext.slider.SliderStatic,thumb:Ext.slider.ThumbStatic,value:Array,e:Ext.EventObjectStatic,eOpts:Object) : void;
// Methods
 applyIncrement(increment:Number) : Number;
 getAllowThumbsOverlapping() : Boolean;
 getAnimation() : any /*Boolean/Object*/;
 getIncrement() : Number;
 getMaxValue() : Number;
 getMinValue() : Number;
 getReadOnly() : Boolean;
 getThumb(index:Number) : Ext.slider.ThumbStatic;
 getThumbConfig() : Object;
 getThumbs() : Ext.slider.ThumbStatic[];
 getValue() : any /*Number/Number[]*/;
 getValues() : Object;
 setAllowThumbsOverlapping(allowThumbsOverlapping:Boolean) : void;
 setAnimation(animation:any /*Boolean/Object*/) : void;
 setIncrement(increment:Number) : void;
 setMaxValue(maxValue:Number) : void;
 setMinValue(minValue:Number) : void;
 setReadOnly(readOnly:Boolean) : void;
 setThumbConfig(thumbConfig:Object) : void;
 setValue(value:any /*Number/Number[]*/) : void;
 setValues(value:Object) : void;
 updateValue(newValue:Object,oldValue:Object) : void;
}
declare var Slider : Ext.slider.SliderStatic;
}

module Ext.slider{
export class ToggleStatic extends Ext.slider.SliderStatic {
// Cfg
 baseCls : String;
 maxValueCls : String;
 minValueCls : String;
// Properties
// Events
// Methods
 getMaxValueCls() : String;
 getMinValueCls() : String;
 setMaxValueCls(maxValueCls:String) : void;
 setMinValueCls(minValueCls:String) : void;
}
declare var Toggle : Ext.slider.ToggleStatic;
}

module Ext.device{
export class OrientationStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Orientation : Ext.device.OrientationStatic;
}

module Ext.event.publisher{
export class ComponentSizeStatic extends Ext.event.publisher.PublisherStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var ComponentSize : Ext.event.publisher.ComponentSizeStatic;
}

module Ext.data.proxy{
export class JsonPStatic extends Ext.data.proxy.ServerStatic {
// Cfg
 autoAppendParams : Boolean;
 callbackKey : String;
 recordParam : String;
// Properties
// Events
// Methods
 abort() : void;
 getAutoAppendParams() : Boolean;
 getCallbackKey() : String;
 getDefaultWriterType() : String;
 getRecordParam() : String;
 setAutoAppendParams(autoAppendParams:Boolean) : void;
 setCallbackKey(callbackKey:String) : void;
 setDefaultWriterType(defaultWriterType:String) : void;
 setRecordParam(recordParam:String) : void;
}
declare var JsonP : Ext.data.proxy.JsonPStatic;
}

module Ext.data{
export class SortTypesStatic extends Ext.BaseStatic {
// Cfg
// Properties
 stripTagsRE : RegExp;
// Events
// Methods
 asDate(value:Object) : Number;
 asFloat(value:Object) : Number;
 asInt(value:Object) : Number;
 asText(value:Object) : String;
 asUCString(value:Object) : String;
 asUCText(value:Object) : String;
 none(value:Object) : Object;
}
declare var SortTypes : Ext.data.SortTypesStatic;
}

module Ext.fx.layout.card{
export class CoverStatic extends Ext.fx.layout.card.StyleStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Cover : Ext.fx.layout.card.CoverStatic;
}

module Ext{
export class EventManagerStatic {
// Cfg
// Properties
// Events
// Methods
 addListener(el:any /*String/HTMLElement*/,eventName:String,handler:Function,scope:Object,options:Object) : void;
 on(el:any /*String/HTMLElement*/,eventName:String,handler:Function,scope:Object,options:Object) : void;
 onDocumentReady() : void;
 onWindowResize(fn:Function,scope:Object,options:Boolean) : void;
 removeAll(el:any /*String/HTMLElement*/) : void;
 removeListener(el:any /*String/HTMLElement*/,eventName:String,fn:Function,scope:Object) : void;
 un(el:any /*String/HTMLElement*/,eventName:String,fn:Function,scope:Object) : void;
}
declare var EventManager : Ext.EventManagerStatic;
}

module Ext{
export class TemplateStatic extends Ext.BaseStatic {
// Cfg
 compiled : Boolean;
 disableFormats : Boolean;
// Properties
 isTemplate : Boolean;
// Events
// Methods
 constructor(html:String[],config:Object);
 append(el:any /*String/HTMLElement/Ext.Element*/,values:any /*Object/Array*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
 apply(values:any /*Object/Array*/) : String;
 applyOut(values:any /*Object/Array*/,out:Array) : Array;
 applyTemplate(values:any /*Object/Array*/) : String;
 compile() : Ext.TemplateStatic;
 insertAfter(el:any /*String/HTMLElement/Ext.Element*/,values:any /*Object/Array*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
 insertBefore(el:any /*String/HTMLElement/Ext.Element*/,values:any /*Object/Array*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
 insertFirst(el:any /*String/HTMLElement/Ext.Element*/,values:any /*Object/Array*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
 overwrite(el:any /*String/HTMLElement/Ext.Element*/,values:any /*Object/Array*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
 set(html:String,compile:Boolean) : Ext.TemplateStatic;
}
declare var Template : Ext.TemplateStatic;
}

module Ext.direct{
export class RemotingProviderStatic extends Ext.direct.JsonProviderStatic {
// Cfg
 actions : Object;
 enableBuffer : any /*Number/Boolean*/;
 enableUrlEncode : String;
 maxRetries : Number;
 namespace : any /*String/Object*/;
 timeout : Number;
 url : String;
// Properties
// Events
 beforecall(provider:Ext.direct.RemotingProviderStatic,transaction:Ext.direct.TransactionStatic,meta:Object,eOpts:Object) : void;
 call(provider:Ext.direct.RemotingProviderStatic,transaction:Ext.direct.TransactionStatic,meta:Object,eOpts:Object) : void;
// Methods
 getActions() : Object;
 getEnableBuffer() : any /*Number/Boolean*/;
 getEnableUrlEncode() : String;
 getMaxRetries() : Number;
 getNamespace() : any /*String/Object*/;
 getTimeout() : Number;
 getUrl() : String;
 setActions(actions:Object) : void;
 setEnableBuffer(enableBuffer:any /*Number/Boolean*/) : void;
 setEnableUrlEncode(enableUrlEncode:String) : void;
 setMaxRetries(maxRetries:Number) : void;
 setNamespace(namespace:any /*String/Object*/) : void;
 setTimeout(timeout:Number) : void;
 setUrl(url:String) : void;
}
declare var RemotingProvider : Ext.direct.RemotingProviderStatic;
}

module Ext.data.reader{
export class JsonStatic extends Ext.data.reader.ReaderStatic {
// Cfg
 record : String;
 useSimpleAccessors : Boolean;
// Properties
// Events
 exception(reader:Ext.data.reader.XmlStatic,response:XMLHttpRequestStatic,error:String,eOpts:Object) : void;
// Methods
 getRecord() : String;
 getUseSimpleAccessors() : Boolean;
 setRecord(record:String) : void;
 setUseSimpleAccessors(useSimpleAccessors:Boolean) : void;
}
declare var Json : Ext.data.reader.JsonStatic;
}

module Ext.data.reader{
export class ArrayStatic extends Ext.data.reader.JsonStatic {
// Cfg
 successProperty : String;
 totalProperty : String;
// Properties
// Events
// Methods
}
declare var Array : Ext.data.reader.ArrayStatic;
}

module Ext.layout{
export class HBoxStatic extends Ext.layout.FlexBoxStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var HBox : Ext.layout.HBoxStatic;
}

module Ext{
export class TitleStatic extends Ext.ComponentStatic {
// Cfg
 baseCls : String;
 title : String;
// Properties
// Events
// Methods
 getTitle() : String;
 setTitle(title:String) : void;
}
declare var Title : Ext.TitleStatic;
}

module Ext.util{
export class TapRepeaterStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
 tap(_this:Ext.util.TapRepeaterStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
 touchend(_this:Ext.util.TapRepeaterStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
 touchstart(_this:Ext.util.TapRepeaterStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
// Methods
 getAccelerate() : Boolean;
 getDelay() : Number;
 getEl() : Object;
 getInterval() : Number;
 getPressCls() : Object;
 getPreventDefault() : Boolean;
 getStopDefault() : Boolean;
 getTimer() : Number;
 setAccelerate(accelerate:Boolean) : void;
 setDelay(delay:Number) : void;
 setEl(el:Object) : void;
 setInterval(interval:Number) : void;
 setPressCls(pressCls:Object) : void;
 setPreventDefault(preventDefault:Boolean) : void;
 setStopDefault(stopDefault:Boolean) : void;
 setTimer(timer:Number) : void;
}
declare var TapRepeater : Ext.util.TapRepeaterStatic;
}

module Ext.data{
export class ModelStatic extends Ext.BaseStatic {
// Cfg
 associations : Object[];
 belongsTo : any /*String/Object/String[]/Object[]*/;
 clientIdProperty : String;
 fields : any /*Object[]/String[]*/;
 hasMany : any /*String/Object/String[]/Object[]*/;
 hasOne : any /*String/Object/String[]/Object[]*/;
 idProperty : String;
 identifier : any /*Object/String*/;
 proxy : any /*Object/Ext.data.Proxy*/;
 useCache : Boolean;
 validations : Object[];
// Properties
 //associations : Ext.util.CollectionStatic;
 dirty : Boolean;
 editing : Boolean;
 //fields : Ext.util.MixedCollectionStatic;
 modified : Object;
 phantom : Boolean;
 raw : Object;
 stores : Array;
 //validations : Ext.util.CollectionStatic;
// Events
// Methods
 beginEdit() : void;
 cancelEdit() : void;
 commit(silent:Boolean) : void;
 copy(id:String) : Ext.data.ModelStatic;
 endEdit(silent:Boolean,modifiedFieldNames:String[]) : void;
 erase(options:any /*Object/Function*/,scope:Object) : Ext.data.ModelStatic;
 get(fieldName:String) : Object;
 getAssociatedData() : Object;
 getAssociations() : Object[];
 getBelongsTo() : any /*String/Object/String[]/Object[]*/;
 getChanges() : Object;
 getClientIdProperty() : String;
 getData(includeAssociated:Boolean) : Object;
 getFields() : any /*Object[]/String[]*/;
 getHasMany() : any /*String/Object/String[]/Object[]*/;
 getHasOne() : any /*String/Object/String[]/Object[]*/;
 getIdProperty() : String;
 getIdentifier() : any /*Object/String*/;
 getIsErased() : void;
 getProxy() : any /*Object/Ext.data.Proxy*/;
 getUseCache() : Boolean;
 getValidations() : Object[];
 isModified(fieldName:String) : Boolean;
 isValid() : Boolean;
 join(store:Ext.data.StoreStatic) : void;
 reject(silent:Boolean) : void;
 save(options:any /*Object/Function*/,scope:Object) : Ext.data.ModelStatic;
 set(fieldName:any /*String/Object*/,value:Object) : void;
 setAssociations(associations:Object[]) : void;
 setBelongsTo(belongsTo:any /*String/Object/String[]/Object[]*/) : void;
 setClientIdProperty(clientIdProperty:String) : void;
 setConvertedData(data:Object) : Ext.data.ModelStatic;
 setData(rawData:Object) : Ext.data.ModelStatic;
 setDirty() : void;
 setFields() : Array;
 setHasMany(hasMany:any /*String/Object/String[]/Object[]*/) : void;
 setHasOne(hasOne:any /*String/Object/String[]/Object[]*/) : void;
 setIdProperty(idProperty:String) : void;
 setIdentifier(identifier:any /*Object/String*/) : void;
 setProxy(proxy:any /*Object/Ext.data.Proxy*/) : void;
 setUseCache(useCache:Boolean) : void;
 setValidations(validations:Object[]) : void;
 toUrl() : String;
 unjoin(store:Ext.data.StoreStatic) : void;
 validate() : Ext.data.ErrorsStatic;
}
declare var Model : Ext.data.ModelStatic;
}

module Ext.device.Purchases{
export class PurchaseStatic extends Ext.data.ModelStatic {
// Cfg
 fields : any /*Object[]/String[]*/;
// Properties
// Events
// Methods
 complete(config:Object) : void;
}
declare var Purchase : Ext.device.Purchases.PurchaseStatic;
}

module Ext.util{
export class FilterStatic extends Ext.BaseStatic {
// Cfg
 anyMatch : Boolean;
 caseSensitive : Boolean;
 exactMatch : Boolean;
 filterFn : Function;
 id : String;
 property : String;
 root : String;
 scope : Object;
 value : any /*RegExp/Mixed*/;
// Properties
// Events
// Methods
 constructor(config:Object);
 getAnyMatch() : Boolean;
 getCaseSensitive() : Boolean;
 getExactMatch() : Boolean;
 getFilterFn() : Function;
 getId() : String;
 getProperty() : String;
 getRoot() : String;
 getScope() : Object;
 getValue() : any /*RegExp/Mixed*/;
 setAnyMatch(anyMatch:Boolean) : void;
 setCaseSensitive(caseSensitive:Boolean) : void;
 setExactMatch(exactMatch:Boolean) : void;
 setFilterFn(filterFn:Function) : void;
 setId(id:String) : void;
 setProperty(property:String) : void;
 setRoot(root:String) : void;
 setScope(scope:Object) : void;
 setValue(value:any /*RegExp/Mixed*/) : void;
}
declare var Filter : Ext.util.FilterStatic;
}

module Ext.event{
export class DomStatic {
// Cfg
// Properties
 distance : Number;
 pageX : Number;
 pageY : Number;
 target : HTMLElement;
// Events
// Methods
 constructor(event:Object);
 getPageX() : Number;
 getPageY() : Number;
 getTarget(selector:String,maxDepth:any /*Number/Mixed*/,returnEl:Boolean) : HTMLElement;
 getTime() : Date;
 getXY() : Array;
 preventDefault() : void;
}
declare var Dom : Ext.event.DomStatic;
}

module Ext.event{
export class TouchStatic extends Ext.event.DomStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Touch : Ext.event.TouchStatic;
}

module Ext.device.contacts{
export class AbstractStatic extends Ext.EventedStatic {
// Cfg
 includeImages : Boolean;
// Properties
// Events
// Methods
 getContacts(config:Object) : Object[];
 getIncludeImages() : Boolean;
 getLocalizedLabel(config:Object) : String;
 getThumbnail(config:Object) : String;
 setIncludeImages(includeImages:Boolean) : void;
}
declare var Abstract : Ext.device.contacts.AbstractStatic;
}

module Ext{
export class ImgStatic extends Ext.ComponentStatic {
// Cfg
 backgroundCls : String;
 baseCls : String;
 imageCls : String;
 mode : String;
 src : String;
// Properties
// Events
 error(_this:Ext.ImgStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
 load(_this:Ext.ImgStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
 tap(_this:Ext.ImgStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
// Methods
 getBackgroundCls() : String;
 getImageCls() : String;
 getMode() : String;
 getSrc() : String;
 setBackgroundCls(backgroundCls:String) : void;
 setImageCls(imageCls:String) : void;
 setMode(mode:String) : void;
 setSrc(src:String) : void;
}
declare var Img : Ext.ImgStatic;
}

module Ext.device{
export class PushStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor();
}
declare var Push : Ext.device.PushStatic;
}

module Ext.event.publisher{
export class DomStatic extends Ext.event.publisher.PublisherStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Dom : Ext.event.publisher.DomStatic;
}

module Ext.event.publisher{
export class TouchGestureStatic extends Ext.event.publisher.DomStatic {
// Cfg
// Properties
// Events
// Methods
 getBuffering() : Object;
 getMoveThrottle() : Number;
 getRecognizers() : Object;
 setBuffering(buffering:Object) : void;
 setMoveThrottle(moveThrottle:Number) : void;
 setRecognizers(recognizers:Object) : void;
}
declare var TouchGesture : Ext.event.publisher.TouchGestureStatic;
}

module Ext.device.camera{
export class SenchaStatic extends Ext.device.camera.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Sencha : Ext.device.camera.SenchaStatic;
}

module Ext{
export class supportsStatic {
// Cfg
// Properties
 AudioTag : Object;
 GeoLocation : Object;
 SVG : Object;
 Transitions : Object;
 VML : Object;
// Events
// Methods
}
declare var supports : Ext.supportsStatic;
}

module Ext{
export class XTemplateParserStatic extends Ext.BaseStatic {
// Cfg
// Properties
 level : Number;
// Events
// Methods
 constructor(config:Object);
 doCase(action:String,actions:Object) : void;
 doDefault() : void;
 doElse() : void;
 doElseIf(action:String,actions:Object) : void;
 doEnd(type:String,actions:Object) : void;
 doEval(text:String) : void;
 doExec(action:String,actions:Object) : void;
 doExpr(expr:String) : void;
 doFor(action:String,actions:Object) : void;
 doIf(action:String,actions:Object) : void;
 doSwitch(action:String,actions:Object) : void;
 doTag(tag:String) : void;
 doText(text:String) : void;
 doTpl() : void;
}
declare var XTemplateParser : Ext.XTemplateParserStatic;
}

module Ext{
export class XTemplateCompilerStatic extends Ext.XTemplateParserStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var XTemplateCompiler : Ext.XTemplateCompilerStatic;
}

module Ext.util{
export class SorterStatic extends Ext.BaseStatic {
// Cfg
 direction : String;
 id : MixedStatic;
 property : String;
 root : String;
 sorterFn : Function;
 transform : Function;
// Properties
// Events
// Methods
 constructor(config:Object);
 getDirection() : String;
 getId() : MixedStatic;
 getProperty() : String;
 getRoot() : String;
 getSorterFn() : Function;
 getTransform() : Function;
 setDirection(direction:String) : void;
 setId(id:MixedStatic) : void;
 setProperty(property:String) : void;
 setRoot(root:String) : void;
 setSorterFn(sorterFn:Function) : void;
 setTransform(transform:Function) : void;
 toggle() : void;
}
declare var Sorter : Ext.util.SorterStatic;
}

module Ext.field{
export class UrlStatic extends Ext.field.TextStatic {
// Cfg
 autoCapitalize : Boolean;
 component : Object;
// Properties
// Events
// Methods
}
declare var Url : Ext.field.UrlStatic;
}

module Ext.fx.animation{
export class PopStatic extends Ext.fx.animation.AbstractStatic {
// Cfg
 before : Object;
 out : Boolean;
// Properties
// Events
// Methods
 getOut() : Boolean;
 setOut(out:Boolean) : void;
}
declare var Pop : Ext.fx.animation.PopStatic;
}

module Ext.viewport{
export class AndroidStatic extends Ext.viewport.DefaultStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Android : Ext.viewport.AndroidStatic;
}

module Ext{
export class VideoStatic extends Ext.MediaStatic {
// Cfg
 cls : any /*String/String[]*/;
 posterUrl : String;
 urls : any /*String/Array*/;
// Properties
// Events
// Methods
 getPosterUrl() : String;
 getUrls() : any /*String/Array*/;
 setPosterUrl(posterUrl:String) : void;
 setUrls(urls:any /*String/Array*/) : void;
 updatePosterUrl(newUrl:Object) : void;
}
declare var Video : Ext.VideoStatic;
}

module Ext.direct{
export class ManagerStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
 event(e:Ext.direct.EventStatic,provider:Ext.direct.ProviderStatic,eOpts:Object) : void;
 exception(e:Ext.direct.EventStatic,eOpts:Object) : void;
// Methods
 addProvider(provider:any /*Ext.direct.Provider/Object...*/) : Object;
 getProvider(id:any /*String/Ext.direct.Provider*/) : Object;
 parseMethod(fn:any /*String/Function*/) : Function;
 removeProvider(provider:any /*String/Ext.direct.Provider*/) : any /*Ext.direct.Provider/null*/;
}
declare var Manager : Ext.direct.ManagerStatic;
}

module Ext.data{
export class FieldStatic extends Ext.BaseStatic {
// Cfg
 allowNull : Boolean;
 convert : Function;
 dateFormat : String;
 defaultValue : Object;
 mapping : any /*String/Number*/;
 name : String;
 persist : Boolean;
 sortDir : String;
 sortType : Function;
 type : any /*String/Object*/;
 useNull : Boolean;
// Properties
// Events
// Methods
 constructor(config:Object);
 getAllowNull() : Boolean;
 getBubbleEvents() : String;
 getConvert() : Function;
 getDateFormat() : String;
 getDecode() : Object;
 getDefaultValue() : Object;
 getEncode() : Object;
 getMapping() : any /*String/Number*/;
 getName() : String;
 getPersist() : Boolean;
 getSortDir() : String;
 getSortType() : Function;
 getType() : any /*String/Object*/;
 setAllowNull(allowNull:Boolean) : void;
 setBubbleEvents(bubbleEvents:String) : void;
 setConvert(convert:Function) : void;
 setDateFormat(dateFormat:String) : void;
 setDecode(decode:Object) : void;
 setDefaultValue(defaultValue:Object) : void;
 setEncode(encode:Object) : void;
 setMapping(mapping:any /*String/Number*/) : void;
 setName(name:String) : void;
 setPersist(persist:Boolean) : void;
 setSortDir(sortDir:String) : void;
 setSortType(sortType:Function) : void;
 setType(type:any /*String/Object*/) : void;
}
declare var Field : Ext.data.FieldStatic;
}

module Ext{
export class SpacerStatic extends Ext.ComponentStatic {
// Cfg
 flex : Number;
 width : Number;
// Properties
// Events
// Methods
}
declare var Spacer : Ext.SpacerStatic;
}

module Ext.fx.runner{
export class CssAnimationStatic extends Ext.fx.runner.CssStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var CssAnimation : Ext.fx.runner.CssAnimationStatic;
}

module Ext.device.notification{
export class AbstractStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 show(config:Object) : void;
 vibrate() : void;
}
declare var Abstract : Ext.device.notification.AbstractStatic;
}

module Ext.device.notification{
export class SimulatorStatic extends Ext.device.notification.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Simulator : Ext.device.notification.SimulatorStatic;
}

module Ext.event{
export class EventStatic extends Ext.BaseStatic {
// Cfg
// Properties
 angle : Number;
 direction : Number;
 duration : Number;
 rotation : Number;
 scale : Number;
// Events
// Methods
 stopEvent() : Ext.event.EventStatic;
 stopPropagation() : Ext.event.EventStatic;
}
declare var Event : Ext.event.EventStatic;
}

module Ext.device{
export class DeviceStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Device : Ext.device.DeviceStatic;
}

module Ext.fx{
export class StateStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(data:Object);
}
declare var State : Ext.fx.StateStatic;
}

module Ext.direct{
export class EventStatic extends Ext.BaseStatic {
// Cfg
 data : Object;
 name : String;
// Properties
// Events
// Methods
 constructor(config:Object);
 getCode() : Object;
 getData() : Object;
 getMessage() : String;
 getName() : String;
 getResult() : Object;
 getStatus() : Boolean;
 getTransaction() : Object;
 getXhr() : Object;
 setCode(code:Object) : void;
 setData(data:Object) : void;
 setMessage(message:String) : void;
 setName(name:String) : void;
 setResult(result:Object) : void;
 setStatus(status:Boolean) : void;
 setTransaction(transaction:Object) : void;
 setXhr(xhr:Object) : void;
}
declare var Event : Ext.direct.EventStatic;
}

module Ext.direct{
export class RemotingEventStatic extends Ext.direct.EventStatic {
// Cfg
 name : String;
// Properties
// Events
// Methods
 getTid() : Object;
 setTid(tid:Object) : void;
}
declare var RemotingEvent : Ext.direct.RemotingEventStatic;
}

module Ext.direct{
export class ExceptionEventStatic extends Ext.direct.RemotingEventStatic {
// Cfg
 name : String;
// Properties
// Events
// Methods
 getError() : Object;
 setError(error:Object) : void;
}
declare var ExceptionEvent : Ext.direct.ExceptionEventStatic;
}

module Ext.fx.animation{
export class CubeStatic extends Ext.fx.animation.AbstractStatic {
// Cfg
 before : Object;
 direction : String;
// Properties
// Events
// Methods
 getOut() : Boolean;
 setOut(out:Boolean) : void;
}
declare var Cube : Ext.fx.animation.CubeStatic;
}

module Ext.device.push{
export class AbstractStatic extends Ext.BaseStatic {
// Cfg
// Properties
 ALERT : Number;
 BADGE : Number;
 SOUND : Number;
// Events
// Methods
 register(config:Object) : void;
}
declare var Abstract : Ext.device.push.AbstractStatic;
}

module Ext{
export class NumberStatic {
// Cfg
// Properties
// Events
// Methods
 constrain(number:Number,min:Number,max:Number) : Number;
 from(value:Object,defaultValue:Number) : Number;
 snap(value:Number,increment:Number,minValue:Number,maxValue:Number) : Number;
 toFixed(value:Number,precision:Number) : void;
}
declare var Number : Ext.NumberStatic;
}

module Ext{
export class ToolbarStatic extends Ext.ContainerStatic {
// Cfg
 baseCls : String;
 defaultType : String;
 docked : String;
 layout : any /*Object/String*/;
 minHeight : String;
 title : any /*String/Ext.Title*/;
 titleCls : Boolean;
 ui : String;
// Properties
// Events
// Methods
 getTitle() : Ext.TitleStatic;
 hideTitle() : void;
 setTitle(title:any /*String/Ext.Title*/) : void;
 showTitle() : void;
}
declare var Toolbar : Ext.ToolbarStatic;
}

module Ext.data{
export class TreeStoreStatic extends Ext.data.NodeStoreStatic {
// Cfg
 clearOnLoad : Boolean;
 defaultRootId : String;
 defaultRootProperty : String;
 nodeParam : String;
 root : any /*Ext.data.Model/Ext.data.NodeInterface/Object*/;
// Properties
// Events
 rootchange(store:Ext.data.TreeStoreStatic,newRoot:Ext.data.ModelStatic,oldRoot:Ext.data.ModelStatic,eOpts:Object) : void;
// Methods
 getClearOnLoad() : Boolean;
 getDefaultRootId() : String;
 getDefaultRootProperty() : String;
 getNodeById(id:Object) : Ext.data.NodeInterfaceStatic;
 getNodeParam() : String;
 getRoot() : any /*Ext.data.Model/Ext.data.NodeInterface/Object*/;
 getRootNode(node:Object) : Ext.data.ModelStatic;
 setClearOnLoad(clearOnLoad:Boolean) : void;
 setDefaultRootId(defaultRootId:String) : void;
 setDefaultRootProperty(defaultRootProperty:String) : void;
 setNodeParam(nodeParam:String) : void;
 setRoot(root:any /*Ext.data.Model/Ext.data.NodeInterface/Object*/) : void;
 setRootNode(node:Ext.data.ModelStatic) : Ext.data.ModelStatic;
}
declare var TreeStore : Ext.data.TreeStoreStatic;
}

module Ext.carousel{
export class ItemStatic extends Ext.DecoratorStatic {
// Cfg
 baseCls : String;
 component : Object;
// Properties
// Events
// Methods
}
declare var Item : Ext.carousel.ItemStatic;
}

/* internal JS type: String*/module Ext.layout{
export class FitStatic extends Ext.layout.DefaultStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Fit : Ext.layout.FitStatic;
}

module Ext{
export class ViewportStatic extends Ext.viewport.DefaultStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Viewport : Ext.ViewportStatic;
}

module Ext.event.recognizer{
export class HorizontalSwipeStatic extends Ext.event.recognizer.SwipeStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var HorizontalSwipe : Ext.event.recognizer.HorizontalSwipeStatic;
}

module Ext.util.paintmonitor{
export class AbstractStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
 getArgs() : Array;
 getCallback() : Object;
 getElement() : Object;
 getScope() : Object;
 setArgs(args:Array) : void;
 setCallback(callback:Object) : void;
 setElement(element:Object) : void;
 setScope(scope:Object) : void;
}
declare var Abstract : Ext.util.paintmonitor.AbstractStatic;
}

module Ext.data{
export class ArrayStoreStatic extends Ext.data.StoreStatic {
// Cfg
 proxy : any /*String/Ext.data.proxy.Proxy/Object*/;
// Properties
// Events
// Methods
}
declare var ArrayStore : Ext.data.ArrayStoreStatic;
}

module Ext.event{
export class ListenerStackStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor();
}
declare var ListenerStack : Ext.event.ListenerStackStatic;
}

module Ext.env{
export class FeatureStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor();
}
declare var Feature : Ext.env.FeatureStatic;
}

module Ext{
export class featureStatic extends Ext.env.FeatureStatic {
// Cfg
// Properties
// Events
// Methods
 has(value:String) : Boolean;
}
declare var feature : Ext.featureStatic;
}

module Ext.util{
export class TranslatableGroupStatic extends Ext.util.translatable.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
 getActiveIndex() : Number;
 getItemLength() : Object;
 getItems() : Array;
 setActiveIndex(activeIndex:Number) : void;
 setItemLength(itemLength:Object) : void;
 setItems(items:Array) : void;
}
declare var TranslatableGroup : Ext.util.TranslatableGroupStatic;
}

module Ext.event{
export class ControllerStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(info:Object);
}
declare var Controller : Ext.event.ControllerStatic;
}

module Ext.dataview{
export class DataViewStatic extends Ext.ContainerStatic {
// Cfg
 baseCls : String;
 blockRefresh : Boolean;
 defaultType : String;
 deferEmptyText : Boolean;
 deselectOnContainerClick : Boolean;
 emptyText : String;
 inline : any /*Boolean/Object*/;
 itemCls : String;
 itemConfig : Object;
 itemSelector : Boolean;
 itemTpl : any /*String/String[]/Ext.XTemplate*/;
 loadingText : String;
 maxItemCache : Number;
 multiSelect : Boolean;
 overItemCls : Boolean;
 pressedCls : String;
 pressedDelay : Number;
 scrollToTopOnRefresh : Boolean;
 scrollable : any /*Boolean/String/Object*/;
 selectedCls : String;
 selectedItemCls : Boolean;
 simpleSelect : Boolean;
 singleSelect : Boolean;
 store : any /*Ext.data.Store/Object*/;
 trackOver : Boolean;
 triggerCtEvent : String;
 triggerEvent : String;
 useComponents : Boolean;
// Properties
// Events
 containertap(eOpts:Object) : void;
 deselect(_this:Ext.dataview.DataViewStatic,record:Ext.data.ModelStatic,supressed:Boolean,eOpts:Object) : void;
 itemdoubletap(_this:Ext.dataview.DataViewStatic,index:Number,target:any /*Ext.Element/Ext.dataview.component.DataItem*/,record:Ext.data.ModelStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemsingletap(_this:Ext.dataview.DataViewStatic,index:Number,target:any /*Ext.Element/Ext.dataview.component.DataItem*/,record:Ext.data.ModelStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemswipe(_this:Ext.dataview.DataViewStatic,index:Number,target:any /*Ext.Element/Ext.dataview.component.DataItem*/,record:Ext.data.ModelStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemtap(_this:Ext.dataview.DataViewStatic,index:Number,target:any /*Ext.Element/Ext.dataview.component.DataItem*/,record:Ext.data.ModelStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemtaphold(_this:Ext.dataview.DataViewStatic,index:Number,target:any /*Ext.Element/Ext.dataview.component.DataItem*/,record:Ext.data.ModelStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemtouchend(_this:Ext.dataview.DataViewStatic,index:Number,target:any /*Ext.Element/Ext.dataview.component.DataItem*/,record:Ext.data.ModelStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemtouchmove(_this:Ext.dataview.DataViewStatic,index:Number,target:any /*Ext.Element/Ext.dataview.component.DataItem*/,record:Ext.data.ModelStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemtouchstart(_this:Ext.dataview.DataViewStatic,index:Number,target:any /*Ext.Element/Ext.dataview.component.DataItem*/,record:Ext.data.ModelStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
 refresh(_this:Ext.dataview.DataViewStatic,eOpts:Object) : void;
 select(_this:Ext.dataview.DataViewStatic,record:Ext.data.ModelStatic,eOpts:Object) : void;
// Methods
 bindStore() : void;
 collectData() : void;
 findItemByChild() : void;
 findTargetByEvent() : void;
 getDeferEmptyText() : Boolean;
 getEmptyText() : String;
 getInline() : any /*Boolean/Object*/;
 getItemAt(index:Number) : any /*Ext.dom.Element/Ext.dataview.component.DataItem*/;
 getItemCls() : String;
 getItemConfig() : Object;
 getItemIndex(item:Number) : Number;
 getItemTpl() : any /*String/String[]/Ext.XTemplate*/;
 getLoadingText() : String;
 getMaxItemCache() : Number;
 getNode() : void;
 getNodes() : void;
 getPressedCls() : String;
 getPressedDelay() : Number;
 getRecords() : void;
 getScrollToTopOnRefresh() : Boolean;
 getSelectedCls() : String;
 getSelectedNodes() : void;
 getSelectedRecords() : void;
 getStore() : any /*Ext.data.Store/Object*/;
 getTriggerCtEvent() : String;
 getTriggerEvent() : String;
 getUseComponents() : Boolean;
 getViewItems() : any /*Ext.dom.Element[]/Ext.dataview.component.DataItem[]*/;
 handleException() : void;
 prepareData(data:any /*Object/Object[]*/,recordIndex:Number,record:Ext.data.ModelStatic) : any /*Array/Object*/;
 refresh() : void;
 refreshNode() : void;
 setDeferEmptyText(deferEmptyText:Boolean) : void;
 setEmptyText(emptyText:String) : void;
 setInline(inline:any /*Boolean/Object*/) : void;
 setItemCls(itemCls:String) : void;
 setItemConfig(itemConfig:Object) : void;
 setItemTpl(itemTpl:any /*String/String[]/Ext.XTemplate*/) : void;
 setLoadingText(loadingText:String) : void;
 setMaxItemCache(maxItemCache:Number) : void;
 setPressedCls(pressedCls:String) : void;
 setPressedDelay(pressedDelay:Number) : void;
 setScrollToTopOnRefresh(scrollToTopOnRefresh:Boolean) : void;
 setSelectedCls(selectedCls:String) : void;
 setStore(store:any /*Ext.data.Store/Object*/) : void;
 setTriggerCtEvent(triggerCtEvent:String) : void;
 setTriggerEvent(triggerEvent:String) : void;
 setUseComponents(useComponents:Boolean) : void;
}
declare var DataView : Ext.dataview.DataViewStatic;
}

module Ext.picker{
export class SlotStatic extends Ext.dataview.DataViewStatic {
// Cfg
 align : String;
 displayField : String;
 name : String;
 title : String;
 value : Number;
 valueField : String;
// Properties
// Events
 slotpick(_this:Ext.picker.SlotStatic,value:MixedStatic,node:HTMLElement,eOpts:Object) : void;
// Methods
 applyTitle(title:String) : String;
 getAlign() : String;
 getDisplayField() : String;
 getName() : String;
 getTitle() : String;
 getValueField() : String;
 setAlign(align:String) : void;
 setDisplayField(displayField:String) : void;
 setName(name:String) : void;
 setTitle(title:String) : void;
 setValueField(valueField:String) : void;
 updateAlign(newAlign:Object,oldAlign:Object) : void;
}
declare var Slot : Ext.picker.SlotStatic;
}

module Ext{
export class DomQueryStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 is(el:any /*String/HTMLElement/Array*/,selector:String) : Boolean;
 select(selector:String,root:any /*HTMLElement/String*/) : HTMLElement[];
 selectNode(selector:String,root:any /*HTMLElement/String*/) : HTMLElement;
}
declare var DomQuery : Ext.DomQueryStatic;
}

module Ext.mixin{
export class FilterableStatic extends Ext.mixin.MixinStatic {
// Cfg
 filterRoot : String;
 filters : Array;
// Properties
 currentSortFn : Object;
 dirtyFilterFn : Boolean;
 filtered : Boolean;
// Events
// Methods
 addFilter(filter:any /*Ext.util.Sorter/Function/Object*/) : void;
 addFilters(filters:Array) : Object;
 filter(data:Array) : Array;
 getFilterFn() : Function;
 getFilterRoot() : String;
 getFilters() : Array;
 insertFilter(index:Number,filter:any /*Ext.util.Sorter/Function/Object*/) : Object;
 insertFilters(index:Number,filters:Array) : Array;
 removeFilters(filters:Array) : void;
 setFilterRoot(filterRoot:String) : void;
 setFilters(filters:Array) : void;
}
declare var Filterable : Ext.mixin.FilterableStatic;
}

module Ext{
export class LabelStatic extends Ext.ComponentStatic {
// Cfg
 baseCls : String;
 html : String;
// Properties
// Events
// Methods
}
declare var Label : Ext.LabelStatic;
}

module Ext.util.sizemonitor{
export class ScrollStatic extends Ext.util.sizemonitor.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Scroll : Ext.util.sizemonitor.ScrollStatic;
}

module Ext.form{
export class PanelStatic extends Ext.PanelStatic {
// Cfg
 baseCls : String;
 baseParams : Object;
 method : String;
 record : Ext.data.ModelStatic;
 scrollable : any /*Boolean/String/Object*/;
 standardSubmit : Boolean;
 submitOnAction : Object;
 url : String;
 waitMsgTarget : Ext.dom.ElementStatic;
 waitTpl : any /*Ext.XTemplate/String/String[]*/;
// Properties
// Events
 beforesubmit(_this:Ext.form.PanelStatic,values:Object,options:Object,eOpts:Object) : void;
 exception(_this:Ext.form.PanelStatic,result:Object,eOpts:Object) : void;
 submit(_this:Ext.form.PanelStatic,result:Object,e:Ext.EventObjectStatic,eOpts:Object) : void;
// Methods
 getBaseParams() : Object;
 getMethod() : String;
 getStandardSubmit() : Boolean;
 getSubmitOnAction() : Object;
 getUrl() : String;
 getValues(enabled:Boolean,all:Boolean) : Object;
 hideMask() : Ext.form.PanelStatic;
 load(instance:Ext.data.ModelStatic) : Ext.form.PanelStatic;
 loadModel(instance:Ext.data.ModelStatic) : Ext.form.PanelStatic;
 loadRecord(instance:Ext.data.ModelStatic) : Ext.form.PanelStatic;
 reset() : Ext.form.PanelStatic;
 setBaseParams(baseParams:Object) : void;
 setMethod(method:String) : void;
 setStandardSubmit(standardSubmit:Boolean) : void;
 setSubmitOnAction(submitOnAction:Object) : void;
 setUrl(url:String) : void;
 setValues(values:Object) : Ext.form.PanelStatic;
 showMask(cfg:any /*String/Object*/,target:Object) : Ext.form.PanelStatic;
 submit(options:Object,params:any /*String/Object*/,headers:Object,autoAbort:Boolean,waitMsg:any /*String/Object*/) : Ext.data.ConnectionStatic;
}
declare var Panel : Ext.form.PanelStatic;
}

module Ext.picker{
export class PickerStatic extends Ext.SheetStatic {
// Cfg
 activeCls : String;
 bottom : any /*Number/String*/;
 cancelButton : any /*String/Mixed*/;
 cls : any /*String/String[]*/;
 doneButton : any /*String/Mixed*/;
 height : Number;
 layout : any /*Object/String*/;
 left : any /*Number/String*/;
 right : any /*Number/String*/;
 slots : Array;
 toolbar : any /*Ext.TitleBar/Ext.Toolbar/Object*/;
 useTitles : Boolean;
 value : any /*String/Number*/;
// Properties
// Events
 cancel(_this:Ext.PickerStatic,eOpts:Object) : void;
 change(_this:Ext.picker.PickerStatic,value:Object,eOpts:Object) : void;
 pick(_this:Ext.PickerStatic,The:Object,slot:Ext.Picker.SlotStatic,eOpts:Object) : void;
// Methods
 applyCancelButton(config:Object) : Object;
 applyDoneButton(config:Object) : Object;
 getCancelButton() : any /*String/Mixed*/;
 getCard() : any /*Object/String/Number*/;
 getDoneButton() : any /*String/Mixed*/;
 getSlots() : Array;
 getToolbar() : any /*Ext.TitleBar/Ext.Toolbar/Object*/;
 getUseTitles() : Boolean;
 getValue(useDom:Object) : Object;
 getValues() : Object;
 setCancelButton(cancelButton:any /*String/Mixed*/) : void;
 setCard(activeItem:any /*Object/String/Number*/) : void;
 setDoneButton(doneButton:any /*String/Mixed*/) : void;
 setSlots(slots:Array) : void;
 setToolbar(toolbar:any /*Ext.TitleBar/Ext.Toolbar/Object*/) : void;
 setUseTitles(useTitles:Boolean) : void;
 setValue(values:Object,animated:Boolean) : Ext.PickerStatic;
}
declare var Picker : Ext.picker.PickerStatic;
}

module Ext.picker{
export class DateStatic extends Ext.picker.PickerStatic {
// Cfg
 dayText : String;
 monthText : String;
 slotOrder : Array;
 value : any /*Object/Date*/;
 yearFrom : Number;
 yearText : String;
 yearTo : Number;
// Properties
// Events
 change(_this:Ext.picker.DateStatic,value:Date,eOpts:Object) : void;
// Methods
 getDayText() : String;
 getMonthText() : String;
 getSlotOrder() : Array;
 getYearFrom() : Number;
 getYearText() : String;
 getYearTo() : Number;
 setDayText(dayText:String) : void;
 setMonthText(monthText:String) : void;
 setSlotOrder(slotOrder:Array) : void;
 setYearFrom(yearFrom:Number) : void;
 setYearText(yearText:String) : void;
 setYearTo(yearTo:Number) : void;
 updateDayText(newDayText:Object,oldDayText:Object) : void;
 updateMonthText(newMonthText:Object,oldMonthText:Object) : void;
 updateYearFrom() : void;
 updateYearText(yearText:Object) : void;
 updateYearTo() : void;
}
declare var Date : Ext.picker.DateStatic;
}

module Ext.device.camera{
export class SimulatorStatic extends Ext.device.camera.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
 getSamples() : Array;
 setSamples(samples:Array) : void;
}
declare var Simulator : Ext.device.camera.SimulatorStatic;
}

module Ext.data{
export class ResultSetStatic extends Ext.BaseStatic {
// Cfg
 count : Number;
 loaded : Boolean;
 message : String;
 records : Ext.data.ModelStatic[];
 success : Boolean;
 total : Number;
// Properties
// Events
// Methods
 constructor(config:Object);
 getCount() : Number;
 getLoaded() : Boolean;
 getMessage() : String;
 getRecords() : Ext.data.ModelStatic[];
 getSuccess() : Boolean;
 getTotal() : Number;
 setCount(count:Number) : void;
 setLoaded(loaded:Boolean) : void;
 setMessage(message:String) : void;
 setRecords(records:Ext.data.ModelStatic[]) : void;
 setSuccess(success:Boolean) : void;
 setTotal(total:Number) : void;
}
declare var ResultSet : Ext.data.ResultSetStatic;
}

module Ext.field{
export class PasswordStatic extends Ext.field.TextStatic {
// Cfg
 autoCapitalize : Boolean;
 component : Object;
// Properties
// Events
// Methods
}
declare var Password : Ext.field.PasswordStatic;
}

module Ext{
export class MapStatic extends Ext.ContainerStatic {
// Cfg
 baseCls : String;
 geo : Ext.util.GeolocationStatic;
 map : google.maps.MapStatic;
 mapOptions : Object;
 maskMap : Boolean;
 maskMapCls : String;
 useCurrentLocation : any /*Boolean/Ext.util.Geolocation*/;
// Properties
// Events
 centerchange(_this:Ext.MapStatic,map:google.maps.MapStatic,center:google.maps.LatLngStatic,eOpts:Object) : void;
 maprender(_this:Ext.MapStatic,map:google.maps.MapStatic,eOpts:Object) : void;
 typechange(_this:Ext.MapStatic,map:google.maps.MapStatic,mapType:Number,eOpts:Object) : void;
 zoomchange(_this:Ext.MapStatic,map:google.maps.MapStatic,zoomLevel:Number,eOpts:Object) : void;
// Methods
 getGeo() : Ext.util.GeolocationStatic;
 getMap() : google.maps.MapStatic;
 getState() : Object;
 getUseCurrentLocation() : any /*Boolean/Ext.util.Geolocation*/;
 setGeo(geo:Ext.util.GeolocationStatic) : void;
 setMap(map:google.maps.MapStatic) : void;
 setMapCenter(coordinates:any /*Object/google.maps.LatLng*/) : void;
 setMapOptions(mapOptions:Object) : void;
 setUseCurrentLocation(useCurrentLocation:any /*Boolean/Ext.util.Geolocation*/) : void;
}
declare var Map : Ext.MapStatic;
}

module Ext.data.association{
export class HasOneStatic extends Ext.data.association.AssociationStatic {
// Cfg
 foreignKey : String;
 getterName : String;
 setterName : String;
// Properties
// Events
// Methods
 getForeignKey() : String;
 getGetterName() : String;
 getInstanceName() : Object;
 getSetterName() : String;
 setForeignKey(foreignKey:String) : void;
 setGetterName(getterName:String) : void;
 setInstanceName(instanceName:Object) : void;
 setSetterName(setterName:String) : void;
}
declare var HasOne : Ext.data.association.HasOneStatic;
}

module Ext{
export class TitleBarStatic extends Ext.ContainerStatic {
// Cfg
 baseCls : String;
 cls : any /*String/String[]*/;
 defaultType : String;
 height : any /*Number/String*/;
 items : any /*Array/Object*/;
 title : String;
 ui : String;
// Properties
// Events
// Methods
 getTitle() : String;
 setTitle(title:String) : void;
}
declare var TitleBar : Ext.TitleBarStatic;
}

module Ext.navigation{
export class BarStatic extends Ext.TitleBarStatic {
// Cfg
 androidAnimation : Boolean;
 baseCls : String;
 cls : any /*String/String[]*/;
 ui : String;
// Properties
// Events
 back(_this:Ext.navigation.BarStatic,eOpts:Object) : void;
// Methods
 getAndroidAnimation() : Boolean;
 setAndroidAnimation(androidAnimation:Boolean) : void;
}
declare var Bar : Ext.navigation.BarStatic;
}

module Ext.util{
export class LineSegmentStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(point1:Ext.util.PointStatic,point2:Ext.util.PointStatic);
 intersects(lineSegment:Ext.util.LineSegmentStatic) : Ext.util.PointStatic;
 toString() : String;
}
declare var LineSegment : Ext.util.LineSegmentStatic;
}

module Ext.scroll.indicator{
export class AbstractStatic extends Ext.ComponentStatic {
// Cfg
 baseCls : String;
 hidden : Boolean;
 ui : String;
// Properties
// Events
// Methods
 getActive() : Boolean;
 getAxis() : String;
 getBarCls() : String;
 getLength() : Object;
 getMinLength() : Number;
 getRatio() : Number;
 getValue() : Number;
 setActive(active:Boolean) : void;
 setAxis(axis:String) : void;
 setBarCls(barCls:String) : void;
 setLength(length:Object) : void;
 setMinLength(minLength:Number) : void;
 setRatio(ratio:Number) : void;
 setValue(value:Number) : void;
}
declare var Abstract : Ext.scroll.indicator.AbstractStatic;
}

module Ext.scroll.indicator{
export class CssTransformStatic extends Ext.scroll.indicator.AbstractStatic {
// Cfg
 cls : any /*String/String[]*/;
// Properties
// Events
// Methods
}
declare var CssTransform : Ext.scroll.indicator.CssTransformStatic;
}

module Ext.data.reader{
export class XmlStatic extends Ext.data.reader.ReaderStatic {
// Cfg
 record : String;
// Properties
// Events
 exception(reader:Ext.data.reader.XmlStatic,response:XMLHttpRequestStatic,error:String,eOpts:Object) : void;
// Methods
 getRecord() : String;
 setRecord(record:String) : void;
}
declare var Xml : Ext.data.reader.XmlStatic;
}

module Ext.viewport{
export class ViewportStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
}
declare var Viewport : Ext.viewport.ViewportStatic;
}

module Ext.fx.animation{
export class FlipStatic extends Ext.fx.animation.AbstractStatic {
// Cfg
 direction : String;
 easing : String;
// Properties
// Events
// Methods
 getHalf() : Boolean;
 getOut() : Object;
 setHalf(half:Boolean) : void;
 setOut(out:Object) : void;
}
declare var Flip : Ext.fx.animation.FlipStatic;
}

module Ext.scroll.indicator{
export class ScrollPositionStatic extends Ext.scroll.indicator.AbstractStatic {
// Cfg
 cls : any /*String/String[]*/;
// Properties
// Events
// Methods
}
declare var ScrollPosition : Ext.scroll.indicator.ScrollPositionStatic;
}

module Ext.device{
export class CommunicatorStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor();
}
declare var Communicator : Ext.device.CommunicatorStatic;
}

module Ext.env{
export class BrowserStatic extends Ext.BaseStatic {
// Cfg
// Properties
 engineName : String;
 engineVersion : Ext.VersionStatic;
 isSecure : Boolean;
 isStrict : Boolean;
 name : String;
 userAgent : String;
 version : Ext.VersionStatic;
// Events
// Methods
 constructor(userAgent:Object);
 is(value:String) : Boolean;
}
declare var Browser : Ext.env.BrowserStatic;
}

module Ext{
export class browserStatic extends Ext.env.BrowserStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var browser : Ext.browserStatic;
}

module Ext.mixin{
export class TraversableStatic extends Ext.mixin.MixinStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Traversable : Ext.mixin.TraversableStatic;
}

module Ext.event{
export class DispatcherStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
 getPublishers() : Object;
 setPublishers(publishers:Object) : void;
}
declare var Dispatcher : Ext.event.DispatcherStatic;
}

module Ext{
export class LoggerStatic {
// Cfg
// Properties
// Events
// Methods
 deprecate() : void;
 error() : void;
 info() : void;
 log(message:String,priority:Number) : Ext.LoggerStatic;
 verbose() : void;
 warn() : void;
}
declare var Logger : Ext.LoggerStatic;
}

module Ext.mixin{
export class IdentifiableStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 getId() : String;
}
declare var Identifiable : Ext.mixin.IdentifiableStatic;
}

module Ext.tab{
export class TabStatic extends Ext.ButtonStatic {
// Cfg
 active : Boolean;
 activeCls : String;
 baseCls : String;
 pressedCls : String;
 title : String;
// Properties
// Events
 activate(_this:Ext.tab.TabStatic,eOpts:Object) : void;
 deactivate(_this:Ext.tab.TabStatic,eOpts:Object) : void;
// Methods
 getActive() : Boolean;
 getActiveCls() : String;
 getTitle() : String;
 setActive(active:Boolean) : void;
 setActiveCls(activeCls:String) : void;
 setTitle(title:String) : void;
}
declare var Tab : Ext.tab.TabStatic;
}

module Ext.field{
export class DatePickerStatic extends Ext.field.TextStatic {
// Cfg
 dateFormat : String;
 destroyPickerOnHide : Boolean;
 picker : any /*Object/Ext.picker.Date*/;
 ui : String;
 //value : any /*Object/Date*/;
// Properties
// Events
 //change(_this:Ext.field.DatePickerStatic,newDate:Date,oldDate:Date,eOpts:Object) : void;
// Methods
 getDateFormat() : String;
 getDatePicker() : void;
 getDestroyPickerOnHide() : Boolean;
 getFormattedValue(format:String) : String;
 setDateFormat(dateFormat:String) : void;
 setDestroyPickerOnHide(destroyPickerOnHide:Boolean) : void;
 setPicker(picker:any /*Object/Ext.picker.Date*/) : void;
}
declare var DatePicker : Ext.field.DatePickerStatic;
}

module Ext{
export class isStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var is : Ext.isStatic;
}

module Ext{
export class ComponentManagerStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor();
 create(config:Object,defaultType:Function) : Ext.ComponentStatic;
 get(id:String) : Object;
 isRegistered(component:String) : Boolean;
 register(component:Object) : void;
 unregister(component:Object) : void;
}
declare var ComponentManager : Ext.ComponentManagerStatic;
}

module Ext.device.camera{
export class PhoneGapStatic extends Ext.device.camera.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var PhoneGap : Ext.device.camera.PhoneGapStatic;
}

module Ext.direct{
export class RemotingMethodStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
 getCallData(args:Array) : Object;
 getFormHandler() : Object;
 getLen() : Object;
 getName() : Object;
 getOrdered() : Boolean;
 getParams() : Object;
 setFormHandler(formHandler:Object) : void;
 setLen(len:Object) : void;
 setName(name:Object) : void;
 setOrdered(ordered:Boolean) : void;
 setParams(params:Object) : void;
}
declare var RemotingMethod : Ext.direct.RemotingMethodStatic;
}

/* internal JS type: RegExp*/module Ext.data{
export class TypesStatic extends Ext.BaseStatic {
// Cfg
// Properties
 AUTO : Object;
 BOOL : Object;
 BOOLEAN : Object;
 DATE : Object;
 FLOAT : Object;
 INT : Object;
 INTEGER : Object;
 NUMBER : Object;
 STRING : Object;
 stripRe : RegExp;
// Events
// Methods
}
declare var Types : Ext.data.TypesStatic;
}

module Ext.device.notification{
export class PhoneGapStatic extends Ext.device.notification.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var PhoneGap : Ext.device.notification.PhoneGapStatic;
}

module Ext.device{
export class GeolocationStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor();
}
declare var Geolocation : Ext.device.GeolocationStatic;
}

module Ext.dataview.element{
export class ContainerStatic extends Ext.ComponentStatic {
// Cfg
// Properties
// Events
 itemdoubletap(_this:Ext.dataview.element.ContainerStatic,item:Ext.dom.ElementStatic,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemsingletap(_this:Ext.dataview.element.ContainerStatic,item:Ext.dom.ElementStatic,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemswipe(_this:Ext.dataview.element.ContainerStatic,item:Ext.dom.ElementStatic,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemtap(_this:Ext.dataview.element.ContainerStatic,item:Ext.dom.ElementStatic,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemtaphold(_this:Ext.dataview.element.ContainerStatic,item:Ext.dom.ElementStatic,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemtouchend(_this:Ext.dataview.element.ContainerStatic,item:Ext.dom.ElementStatic,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemtouchmove(_this:Ext.dataview.element.ContainerStatic,item:Ext.dom.ElementStatic,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
 itemtouchstart(_this:Ext.dataview.element.ContainerStatic,item:Ext.dom.ElementStatic,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
// Methods
}
declare var Container : Ext.dataview.element.ContainerStatic;
}

module Ext.util{
export class WrapperStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(elementConfig:Object,wrappedElement:Object);
}
declare var Wrapper : Ext.util.WrapperStatic;
}

module Ext.event.recognizer{
export class PinchStatic extends Ext.event.recognizer.MultiTouchStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Pinch : Ext.event.recognizer.PinchStatic;
}

module Ext.event.recognizer{
export class LongPressStatic extends Ext.event.recognizer.SingleTouchStatic {
// Cfg
// Properties
// Events
// Methods
 getMinDuration() : Number;
 setMinDuration(minDuration:Number) : void;
}
declare var LongPress : Ext.event.recognizer.LongPressStatic;
}

module Ext.util{
export class MixedCollectionStatic extends Ext.util.AbstractMixedCollectionStatic {
// Cfg
// Properties
// Events
 sort(_this:Ext.util.MixedCollectionStatic,eOpts:Object) : void;
// Methods
 reorder(mapping:Object) : void;
 sortBy(sorterFn:Function) : void;
 sortByKey(direction:String,fn:Function) : void;
}
declare var MixedCollection : Ext.util.MixedCollectionStatic;
}

module Ext.device.device{
export class SenchaStatic extends Ext.device.device.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Sencha : Ext.device.device.SenchaStatic;
}

module Ext.device.purchases{
export class SenchaStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 canMakePayments(config:Object) : void;
 getPendingPurchases(config:Object) : void;
 getProducts(config:Object) : void;
 getPurchases(config:Object) : void;
}
declare var Sencha : Ext.device.purchases.SenchaStatic;
}

module Ext.field{
export class EmailStatic extends Ext.field.TextStatic {
// Cfg
 autoCapitalize : Boolean;
 component : Object;
// Properties
// Events
// Methods
}
declare var Email : Ext.field.EmailStatic;
}

module Ext.fx.layout.card{
export class ScrollCoverStatic extends Ext.fx.layout.card.ScrollStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var ScrollCover : Ext.fx.layout.card.ScrollCoverStatic;
}

module Ext.util.paintmonitor{
export class CssAnimationStatic extends Ext.util.paintmonitor.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var CssAnimation : Ext.util.paintmonitor.CssAnimationStatic;
}

module Ext.fx.animation{
export class PopOutStatic extends Ext.fx.animation.PopStatic {
// Cfg
 before : Object;
// Properties
// Events
// Methods
}
declare var PopOut : Ext.fx.animation.PopOutStatic;
}

module Ext.field{
export class SliderStatic extends Ext.field.FieldStatic {
// Cfg
 cls : any /*String/String[]*/;
 increment : Number;
 maxValue : Number;
 minValue : Number;
 readOnly : Boolean;
 tabIndex : Number;
 //value : any /*Number/Number[]*/;
 values : any /*Number/Number[]*/;
// Properties
// Events
 change(me:Ext.field.SliderStatic,sl:Ext.slider.SliderStatic,thumb:Ext.slider.ThumbStatic,newValue:Number,oldValue:Number,eOpts:Object) : void;
 drag(_this:Ext.field.SliderStatic,sl:Ext.slider.SliderStatic,thumb:Ext.slider.ThumbStatic,e:Ext.EventObjectStatic,eOpts:Object) : void;
 dragend(_this:Ext.field.SliderStatic,sl:Ext.slider.SliderStatic,thumb:Ext.slider.ThumbStatic,value:Array,e:Ext.EventObjectStatic,eOpts:Object) : void;
 dragstart(_this:Ext.field.SliderStatic,sl:Ext.slider.SliderStatic,thumb:Ext.slider.ThumbStatic,value:Array,e:Ext.EventObjectStatic,eOpts:Object) : void;
// Methods
 getIncrement() : Number;
 getMaxValue() : Number;
 getMinValue() : Number;
 getReadOnly() : Boolean;
 getValues() : Object;
 setIncrement(increment:Number) : void;
 setMaxValue(maxValue:Number) : void;
 setMinValue(minValue:Number) : void;
 setReadOnly(readOnly:Boolean) : void;
 setValues(value:Object) : void;
}
declare var Slider : Ext.field.SliderStatic;
}

module Ext.event.recognizer{
export class DoubleTapStatic extends Ext.event.recognizer.SingleTouchStatic {
// Cfg
// Properties
// Events
// Methods
 getMaxDuration() : Number;
 setMaxDuration(maxDuration:Number) : void;
}
declare var DoubleTap : Ext.event.recognizer.DoubleTapStatic;
}

module Ext.dataview{
export class NestedListStatic extends Ext.ContainerStatic {
// Cfg
 allowDeselect : Boolean;
 backButton : Object;
 backText : String;
 cardSwitchAnimation : any /*String/Object/Boolean*/;
 clearSelectionDelay : Number;
 cls : any /*String/String[]*/;
 detailCard : Ext.ComponentStatic;
 detailContainer : Ext.ContainerStatic;
 displayField : String;
 emptyText : String;
 listConfig : Object;
 loadingText : String;
 onItemDisclosure : any /*Boolean/Function*/;
 store : any /*Ext.data.TreeStore/String*/;
 title : String;
 toolbar : any /*Ext.Toolbar/Object/Boolean*/;
 updateTitleText : Boolean;
 useTitleAsBackText : Boolean;
 useToolbar : Boolean;
// Properties
// Events
 back(_this:Ext.dataview.NestedListStatic,node:HTMLElement,lastActiveList:Ext.dataview.ListStatic,detailCardActive:Boolean,eOpts:Object) : void;
 beforeload(_this:Ext.dataview.NestedListStatic,store:Ext.data.StoreStatic,operation:Ext.data.OperationStatic,eOpts:Object) : void;
 beforeselectionchange(_this:Ext.dataview.NestedListStatic,list:Ext.dataview.ListStatic,node:HTMLElement,selections:Array,eOpts:Object) : void;
 containertap(_this:Ext.dataview.NestedListStatic,list:Ext.dataview.ListStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
 itemdoubletap(_this:Ext.dataview.NestedListStatic,list:Ext.dataview.ListStatic,index:Number,target:Ext.dom.ElementStatic,record:Ext.data.RecordStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
 itemtap(_this:Ext.dataview.NestedListStatic,list:Ext.dataview.ListStatic,index:Number,target:Ext.dom.ElementStatic,record:Ext.data.RecordStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
 leafitemtap(_this:Ext.dataview.NestedListStatic,list:Ext.ListStatic,index:Number,target:Ext.dom.ElementStatic,record:Ext.data.RecordStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
 listchange(_this:Ext.dataview.NestedListStatic,listitem:Object,eOpts:Object) : void;
 load(_this:Ext.dataview.NestedListStatic,store:Ext.data.StoreStatic,records:Ext.util.GrouperStatic[],successful:Boolean,operation:Ext.data.OperationStatic,eOpts:Object) : void;
 selectionchange(_this:Ext.dataview.NestedListStatic,list:Ext.dataview.ListStatic,selections:Array,eOpts:Object) : void;
// Methods
 getAllowDeselect() : Boolean;
 getBackButton() : Object;
 getBackText() : String;
 getDetailCard() : Ext.ComponentStatic;
 getDetailContainer() : Ext.ContainerStatic;
 getDisplayField() : String;
 getEmptyText() : String;
 getItemTextTpl(node:Ext.data.RecordStatic) : String;
 getListConfig() : Object;
 getLoadingText() : String;
 getOnItemDisclosure() : any /*Boolean/Function*/;
 getStore() : any /*Ext.data.TreeStore/String*/;
 getSubList() : void;
 getTitle() : String;
 getTitleTextTpl(node:Ext.data.RecordStatic) : String;
 getToolbar() : any /*Ext.Toolbar/Object/Boolean*/;
 getUpdateTitleText() : Boolean;
 getUseTitleAsBackText() : Boolean;
 getUseToolbar() : Boolean;
 goToLeaf(node:Ext.data.NodeInterfaceStatic) : void;
 goToNode(node:Ext.data.NodeInterfaceStatic) : void;
 onBackTap() : void;
 onItemTap(list:Ext.ListStatic,index:Number,target:Ext.ElementStatic,record:Ext.data.RecordStatic,e:Ext.event.EventStatic) : void;
 setAllowDeselect(allowDeselect:Boolean) : void;
 setBackButton(backButton:Object) : void;
 setBackText(backText:String) : void;
 setDetailCard(detailCard:Ext.ComponentStatic) : void;
 setDetailContainer(detailContainer:Ext.ContainerStatic) : void;
 setDisplayField(displayField:String) : void;
 setEmptyText(emptyText:String) : void;
 setListConfig(listConfig:Object) : void;
 setLoadingText(loadingText:String) : void;
 setOnItemDisclosure(onItemDisclosure:any /*Boolean/Function*/) : void;
 setStore(store:any /*Ext.data.TreeStore/String*/) : void;
 setTitle(title:String) : void;
 setToolbar(toolbar:any /*Ext.Toolbar/Object/Boolean*/) : void;
 setUpdateTitleText(updateTitleText:Boolean) : void;
 setUseTitleAsBackText(useTitleAsBackText:Boolean) : void;
 setUseToolbar(useToolbar:Boolean) : void;
}
declare var NestedList : Ext.dataview.NestedListStatic;
}

module Ext.util{
export class TranslatableListStatic extends Ext.util.translatable.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
 getItems() : Array;
 setItems(items:Array) : void;
}
declare var TranslatableList : Ext.util.TranslatableListStatic;
}

module Ext{
export class SegmentedButtonStatic extends Ext.ContainerStatic {
// Cfg
 allowDepress : Boolean;
 allowMultiple : Boolean;
 allowToggle : Boolean;
 baseCls : String;
 defaultType : String;
 layout : any /*Object/String*/;
 pressedButtons : Array;
 pressedCls : String;
// Properties
// Events
 toggle(_this:Ext.SegmentedButtonStatic,button:Ext.ButtonStatic,isPressed:Boolean,eOpts:Object) : void;
// Methods
 getAllowDepress() : Boolean;
 getAllowMultiple() : Boolean;
 getAllowToggle() : Boolean;
 getPressed() : void;
 getPressedButtons() : Array;
 getPressedCls() : String;
 isPressed(button:Ext.ButtonStatic) : Boolean;
 setAllowDepress(allowDepress:Boolean) : void;
 setAllowMultiple(allowMultiple:Boolean) : void;
 setAllowToggle(allowToggle:Boolean) : void;
 setPressed(button:any /*Number/String/Ext.Button*/,pressed:Boolean,suppressEvents:Boolean) : void;
 setPressedButtons(pressedButtons:Array) : void;
 setPressedCls(pressedCls:String) : void;
}
declare var SegmentedButton : Ext.SegmentedButtonStatic;
}

module Ext.util{
export class RegionStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(top:Number,right:Number,bottom:Number,left:Number);
 adjust(top:Number,right:Number,bottom:Number,left:Number) : Ext.util.RegionStatic;
 constrainTo(targetRegion:Ext.util.RegionStatic) : Ext.util.RegionStatic;
 contains(region:Ext.util.RegionStatic) : Boolean;
 copy() : Ext.util.RegionStatic;
 equals(region:Ext.util.RegionStatic) : Boolean;
 getOutOfBoundOffset(axis:any /*String/Object*/,p:Ext.util.PointStatic) : Ext.util.RegionStatic;
 getOutOfBoundOffsetX(p:Number) : Number;
 getOutOfBoundOffsetY(p:Number) : Number;
 intersect(region:Ext.util.RegionStatic) : any /*Ext.util.Region/Boolean*/;
 isOutOfBound(axis:String,p:any /*Ext.util.Point/Number*/) : Boolean;
 isOutOfBoundX(p:Number) : Boolean;
 isOutOfBoundY(p:Number) : Boolean;
 round() : Ext.util.RegionStatic;
 toString() : String;
 translateBy(offset:Object) : Ext.util.RegionStatic;
 union(region:Ext.util.RegionStatic) : Ext.util.RegionStatic;
}
declare var Region : Ext.util.RegionStatic;
}

module Ext.behavior{
export class ScrollableStatic extends Ext.behavior.BehaviorStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Scrollable : Ext.behavior.ScrollableStatic;
}

module Ext.data.proxy{
export class LocalStorageStatic extends Ext.data.proxy.WebStorageStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var LocalStorage : Ext.data.proxy.LocalStorageStatic;
}

module Ext.util{
export class GrouperStatic extends Ext.util.SorterStatic {
// Cfg
 groupFn : Function;
 sortProperty : String;
 sorterFn : Function;
// Properties
// Events
// Methods
 getGroupFn() : Function;
 getSortProperty() : String;
 setGroupFn(groupFn:Function) : void;
 setSortProperty(sortProperty:String) : void;
}
declare var Grouper : Ext.util.GrouperStatic;
}

module Ext.event.recognizer{
export class RotateStatic extends Ext.event.recognizer.MultiTouchStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Rotate : Ext.event.recognizer.RotateStatic;
}

module Ext.device.device{
export class SimulatorStatic extends Ext.device.device.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Simulator : Ext.device.device.SimulatorStatic;
}

module Ext{
export class ItemCollectionStatic extends Ext.util.MixedCollectionStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var ItemCollection : Ext.ItemCollectionStatic;
}

/* internal JS type: Boolean*/module Ext.util{
export class CollectionStatic extends Ext.BaseStatic {
// Cfg
 filters : Object[];
 sorters : Object[];
// Properties
 all : Array;
 indices : Object;
 items : Array;
 keys : Array;
 length : Number;
 map : Object;
// Events
// Methods
 constructor(keyFn:Object,config:Object);
 add(key:String,item:Object) : Object;
 addAll(objs:any /*Object/Array*/) : void;
 clear() : void;
 clone() : Ext.util.MixedCollectionStatic;
 contains(item:Object) : Boolean;
 containsKey(key:String) : Boolean;
 each(fn:Function,scope:Object) : void;
 eachKey(fn:Function,scope:Object) : void;
 filterBy(fn:Function,scope:Object) : Ext.util.MixedCollectionStatic;
 findBy(fn:Function,scope:Object) : Object;
 findIndexBy(fn:Function,scope:Object,start:Number) : Number;
 first() : Object;
 get(key:any /*String/Number*/) : Object;
 getAt(index:Number) : Object;
 getAutoFilter() : Boolean;
 getAutoSort() : Boolean;
 getByKey(key:any /*String/Number*/) : Object;
 getCount() : Number;
 getKey(item:Object) : Object;
 getRange(startIndex:Number,endIndex:Number) : Array;
 indexOf(item:Object) : Number;
 indexOfKey(key:String) : Number;
 insert(index:Number,key:String,item:Object) : Object;
 last() : Object;
 remove(item:Object) : Object;
 removeAll(items:Array) : Ext.util.MixedCollectionStatic;
 removeAt(index:Number) : Object;
 removeAtKey(key:String) : any /*Object/Boolean*/;
 replace(oldKey:String,item:Object) : Object;
 setAutoFilter(autoFilter:Boolean) : void;
 setAutoSort(autoSort:Boolean) : void;
}
declare var Collection : Ext.util.CollectionStatic;
}

module Ext.data{
export class ErrorsStatic extends Ext.util.CollectionStatic {
// Cfg
// Properties
// Events
// Methods
 getByField(fieldName:String) : Object[];
 isValid() : Boolean;
}
declare var Errors : Ext.data.ErrorsStatic;
}

module Ext{
export class AnimStatic extends Ext.BaseStatic {
// Cfg
 after : Function;
 autoClear : Boolean;
 before : Function;
 delay : Number;
 direction : String;
 disableAnimations : Boolean;
 duration : Number;
 easing : String;
 from : Object;
 out : Boolean;
 reverse : Boolean;
 scope : Object;
 to : Object;
// Properties
// Events
// Methods
 constructor(config:Object);
 run(el:any /*Ext.Element/HTMLElement*/,anim:String,config:Object) : void;
}
declare var Anim : Ext.AnimStatic;
}

module Ext.util{
export class PointStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(x:Number,y:Number);
 clone() : Ext.util.PointStatic;
 copy() : Ext.util.PointStatic;
 copyFrom(point:any /*Ext.util.Point/Object*/) : Ext.util.PointStatic;
 equals(The:any /*Ext.util.Point/Object*/) : Boolean;
 isCloseTo(The:any /*Ext.util.Point/Object*/,threshold:any /*Object/Number*/) : Boolean;
 isWithin() : Boolean;
 roundedEquals(point:any /*Ext.util.Point/Object*/) : Boolean;
 toString() : String;
 translate(x:Number,y:Number) : Boolean;
}
declare var Point : Ext.util.PointStatic;
}

module Ext{
export class ObjectStatic {
// Cfg
// Properties
// Events
// Methods
 chain(object:Object) : void;
 each(object:Object,fn:Function,scope:Object) : void;
 fromQueryString(queryString:String,recursive:Boolean) : Object;
 getKey(object:Object,value:Object) : void;
 getKeys(object:Object) : String[];
 getSize(object:Object) : Number;
 getValues(object:Object) : Array;
 merge(source:Object,objs:Object[]) : Object;
 toQueryObjects(name:String,value:Object,recursive:Boolean) : Object[];
 toQueryString(object:Object,recursive:Boolean) : String;
}
declare var Object : Ext.ObjectStatic;
}

module Ext.fx.layout.card{
export class CubeStatic extends Ext.fx.layout.card.StyleStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Cube : Ext.fx.layout.card.CubeStatic;
}

module Ext.event.publisher{
export class ComponentDelegationStatic extends Ext.event.publisher.PublisherStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var ComponentDelegation : Ext.event.publisher.ComponentDelegationStatic;
}

module Ext.fx.layout.card{
export class FadeStatic extends Ext.fx.layout.card.StyleStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Fade : Ext.fx.layout.card.FadeStatic;
}

module Ext{
export class VersionStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(version:any /*String/Number*/);
 deprecate(packageName:String,since:String,closure:Function,scope:Object) : void;
 equals(target:any /*String/Number*/) : Boolean;
 getBuild() : Number;
 getMajor() : Number;
 getMinor() : Number;
 getPatch() : Number;
 getRelease() : Number;
 getShortVersion() : String;
 getVersion(packageName:String) : Ext.VersionStatic;
 gt(target:any /*String/Number*/) : Boolean;
 gtEq(target:any /*String/Number*/) : Boolean;
 isGreaterThan(target:any /*String/Number*/) : Boolean;
 isGreaterThanOrEqual(target:any /*String/Number*/) : Boolean;
 isLessThan(target:any /*String/Number*/) : Boolean;
 isLessThanOrEqual(target:any /*String/Number*/) : Boolean;
 lt(target:any /*String/Number*/) : Boolean;
 ltEq(target:any /*String/Number*/) : Boolean;
 match(target:any /*String/Number*/) : Boolean;
 setVersion(packageName:String,version:any /*String/Ext.Version*/) : ExtStatic;
 toArray() : Number[];
 toNumber(value:Object) : Number;
}
declare var Version : Ext.VersionStatic;
}

module Ext.scroll{
export class ViewStatic extends Ext.EventedStatic {
// Cfg
 indicatorsUi : String;
// Properties
// Events
// Methods
 getCls() : String;
 getElement() : Object;
 getIndicators() : Object;
 getIndicatorsHidingDelay() : Number;
 getIndicatorsUi() : String;
 getScroller() : Ext.scroll.ViewStatic;
 setCls(cls:String) : void;
 setElement(element:Object) : void;
 setIndicators(indicators:Object) : void;
 setIndicatorsHidingDelay(indicatorsHidingDelay:Number) : void;
 setIndicatorsUi(indicatorsUi:String) : void;
 setScroller(scroller:Object) : void;
}
declare var View : Ext.scroll.ViewStatic;
}

module Ext.event.recognizer{
export class DragStatic extends Ext.event.recognizer.SingleTouchStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Drag : Ext.event.recognizer.DragStatic;
}

module Ext.data.association{
export class HasManyStatic extends Ext.data.association.AssociationStatic {
// Cfg
 autoLoad : Boolean;
 autoSync : Boolean;
 filterProperty : String;
 foreignKey : String;
 name : String;
 store : Object;
 storeConfig : Object;
 storeName : String;
// Properties
// Events
// Methods
 getAutoLoad() : Boolean;
 getAutoSync() : Boolean;
 getFilterProperty() : String;
 getForeignKey() : String;
 getStore() : Object;
 getStoreName() : String;
 setAutoLoad(autoLoad:Boolean) : void;
 setAutoSync(autoSync:Boolean) : void;
 setFilterProperty(filterProperty:String) : void;
 setForeignKey(foreignKey:String) : void;
 setStore(store:Object) : void;
 setStoreName(storeName:String) : void;
}
declare var HasMany : Ext.data.association.HasManyStatic;
}

module Ext.device.Purchases{
export class ProductStatic extends Ext.data.ModelStatic {
// Cfg
 fields : any /*Object[]/String[]*/;
// Properties
// Events
// Methods
 purchase(config:Object) : void;
}
declare var Product : Ext.device.Purchases.ProductStatic;
}

module Ext.fx.layout.card{
export class FlipStatic extends Ext.fx.layout.card.StyleStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Flip : Ext.fx.layout.card.FlipStatic;
}

module Ext.data{
export class DirectStoreStatic extends Ext.data.StoreStatic {
// Cfg
 proxy : any /*String/Ext.data.proxy.Proxy/Object*/;
// Properties
// Events
// Methods
}
declare var DirectStore : Ext.data.DirectStoreStatic;
}

module Ext.scroll.indicator{
export class DefaultStatic extends Ext.scroll.indicator.AbstractStatic {
// Cfg
 cls : any /*String/String[]*/;
// Properties
// Events
// Methods
}
declare var Default : Ext.scroll.indicator.DefaultStatic;
}

module Ext.plugin{
export class ListPagingStatic extends Ext.ComponentStatic {
// Cfg
 autoPaging : Boolean;
 loadMoreText : String;
 noMoreRecordsText : String;
// Properties
// Events
 loadmorecmpadded(_this:Ext.plugin.ListPagingStatic,list:Ext.ListStatic,eOpts:Object) : void;
// Methods
 getAutoPaging() : Boolean;
 getLoadMoreText() : String;
 getNoMoreRecordsText() : String;
 setAutoPaging(autoPaging:Boolean) : void;
 setLoadMoreText(loadMoreText:String) : void;
 setNoMoreRecordsText(noMoreRecordsText:String) : void;
}
declare var ListPaging : Ext.plugin.ListPagingStatic;
}

module Ext.device.notification{
export class SenchaStatic extends Ext.device.notification.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Sencha : Ext.device.notification.SenchaStatic;
}

module Ext.data.writer{
export class XmlStatic extends Ext.data.writer.WriterStatic {
// Cfg
 defaultDocumentRoot : String;
 documentRoot : String;
 header : String;
 record : String;
// Properties
// Events
// Methods
 getDefaultDocumentRoot() : String;
 getDocumentRoot() : String;
 getHeader() : String;
 getRecord() : String;
 setDefaultDocumentRoot(defaultDocumentRoot:String) : void;
 setDocumentRoot(documentRoot:String) : void;
 setHeader(header:String) : void;
 setRecord(record:String) : void;
 writeRecords(request:Object,data:Object) : Object;
}
declare var Xml : Ext.data.writer.XmlStatic;
}

module Ext{
export class MsgStatic extends Ext.MessageBoxStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Msg : Ext.MsgStatic;
}

module Ext.field{
export class TextAreaInputStatic extends Ext.field.InputStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var TextAreaInput : Ext.field.TextAreaInputStatic;
}

module Ext.device.orientation{
export class HTML5Static extends Ext.device.orientation.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var HTML5 : Ext.device.orientation.HTML5Static;
}

module Ext.scroll{
export class IndicatorStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
}
declare var Indicator : Ext.scroll.IndicatorStatic;
}

module Ext.fx.easing{
export class BoundMomentumStatic extends Ext.fx.easing.AbstractStatic {
// Cfg
 bounce : Object;
 minVelocity : Number;
 momentum : Object;
 startVelocity : Number;
// Properties
// Events
// Methods
 getBounce() : Object;
 getMaxMomentumValue() : Number;
 getMinMomentumValue() : Number;
 getMinVelocity() : Number;
 getMomentum() : Object;
 getStartVelocity() : Number;
 setBounce(bounce:Object) : void;
 setMaxMomentumValue(maxMomentumValue:Number) : void;
 setMinMomentumValue(minMomentumValue:Number) : void;
 setMinVelocity(minVelocity:Number) : void;
 setMomentum(momentum:Object) : void;
 setStartVelocity(startVelocity:Number) : void;
}
declare var BoundMomentum : Ext.fx.easing.BoundMomentumStatic;
}

module Ext.direct{
export class PollingProviderStatic extends Ext.direct.JsonProviderStatic {
// Cfg
 baseParams : Object;
 interval : Number;
 url : any /*String/Function*/;
// Properties
// Events
 beforepoll(_this:Ext.direct.PollingProviderStatic,eOpts:Object) : void;
 poll(_this:Ext.direct.PollingProviderStatic,eOpts:Object) : void;
// Methods
 getBaseParams() : Object;
 getInterval() : Number;
 getUrl() : any /*String/Function*/;
 setBaseParams(baseParams:Object) : void;
 setInterval(interval:Number) : void;
 setUrl(url:any /*String/Function*/) : void;
}
declare var PollingProvider : Ext.direct.PollingProviderStatic;
}

module Ext.navigation{
export class ViewStatic extends Ext.ContainerStatic {
// Cfg
 baseCls : String;
 defaultBackButtonText : String;
 items : any /*Array/Object*/;
 navigationBar : any /*Boolean/Object*/;
 useTitleForBackButtonText : Boolean;
// Properties
// Events
 back(_this:Ext.navigation.ViewStatic,eOpts:Object) : void;
 pop(_this:Ext.navigation.ViewStatic,view:MixedStatic,eOpts:Object) : void;
 push(_this:Ext.navigation.ViewStatic,view:MixedStatic,eOpts:Object) : void;
// Methods
 getDefaultBackButtonText() : String;
 getNavigationBar() : any /*Boolean/Object*/;
 getPreviousItem() : MixedStatic;
 getUseTitleForBackButtonText() : Boolean;
 pop(count:Number) : Ext.ComponentStatic;
 push(view:Object) : Ext.ComponentStatic;
 reset() : Ext.ComponentStatic;
 setDefaultBackButtonText(defaultBackButtonText:String) : void;
 setNavigationBar(navigationBar:any /*Boolean/Object*/) : void;
 setUseTitleForBackButtonText(useTitleForBackButtonText:Boolean) : void;
}
declare var View : Ext.navigation.ViewStatic;
}

module Ext.util{
export class InflectorStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 classify(word:String) : String;
 clearPlurals() : void;
 clearSingulars() : void;
 isTransnumeral(word:String) : Boolean;
 ordinalize(number:Number) : String;
 plural(matcher:RegExp,replacer:String) : void;
 pluralize(word:String) : String;
 singular(matcher:RegExp,replacer:String) : void;
 singularize(word:String) : String;
}
declare var Inflector : Ext.util.InflectorStatic;
}

module Ext{
export class DomHelperStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 append(el:any /*String/HTMLElement/Ext.Element*/,o:any /*Object/String*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
 applyStyles(el:any /*String/HTMLElement*/,styles:any /*String/Object/Function*/) : void;
 createTemplate(o:Object) : Ext.TemplateStatic;
 generateStyles(styles:Object,buffer:String[]) : any /*String/String[]*/;
 insertAfter(el:any /*String/HTMLElement/Ext.Element*/,o:Object,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
 insertBefore(el:any /*String/HTMLElement/Ext.Element*/,o:any /*Object/String*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
 insertFirst(el:any /*String/HTMLElement/Ext.Element*/,o:any /*Object/String*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
 insertHtml(where:String,el:any /*HTMLElement/TextNode*/,html:String) : HTMLElement;
 markup(spec:Object) : String;
 overwrite(el:any /*String/HTMLElement/Ext.Element*/,o:any /*Object/String*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
}
declare var DomHelper : Ext.DomHelperStatic;
}

module Ext.dataview{
export class ListStatic extends Ext.dataview.DataViewStatic {
// Cfg
 baseCls : String;
 clearSelectionOnDeactivate : Boolean;
 defaultType : String;
 disclosureProperty : String;
 grouped : Boolean;
 indexBar : any /*Boolean/Object*/;
 itemHeight : Number;
 onItemDisclosure : any /*Boolean/Function/Object*/;
 pinHeaders : Boolean;
 preventSelectionOnDisclose : Boolean;
 refreshHeightOnUpdate : Boolean;
 scrollable : any /*Boolean/String/Object*/;
 ui : String;
 variableHeights : Boolean;
// Properties
// Events
 disclose(_this:Ext.dataview.ListStatic,record:Ext.data.ModelStatic,target:HTMLElement,index:Number,e:Ext.EventObjectStatic,eOpts:Object) : void;
// Methods
 getDisclosureProperty() : String;
 getGrouped() : Boolean;
 getIcon() : Object;
 getIndexBar() : any /*Boolean/Object*/;
 getItemHeight() : Number;
 getOnItemDisclosure() : any /*Boolean/Function/Object*/;
 getPinHeaders() : Boolean;
 getPreventSelectionOnDisclose() : Boolean;
 getRefreshHeightOnUpdate() : Boolean;
 getVariableHeights() : Boolean;
 setDisclosureProperty(disclosureProperty:String) : void;
 setGrouped(grouped:Boolean) : void;
 setIcon(icon:Object) : void;
 setIndexBar(indexBar:any /*Boolean/Object*/) : void;
 setItemHeight(itemHeight:Number) : void;
 setOnItemDisclosure(onItemDisclosure:any /*Boolean/Function/Object*/) : void;
 setPinHeaders(pinHeaders:Boolean) : void;
 setPreventSelectionOnDisclose(preventSelectionOnDisclose:Boolean) : void;
 setRefreshHeightOnUpdate(refreshHeightOnUpdate:Boolean) : void;
 setVariableHeights(variableHeights:Boolean) : void;
}
declare var List : Ext.dataview.ListStatic;
}

module Ext.layout.wrapper{
export class InnerStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
 getContainer() : Object;
 getSizeState() : Object;
 setContainer(container:Object) : void;
 setSizeState(sizeState:Object) : void;
}
declare var Inner : Ext.layout.wrapper.InnerStatic;
}

module Ext.field{
export class SearchStatic extends Ext.field.TextStatic {
// Cfg
 component : Object;
 ui : String;
// Properties
// Events
// Methods
}
declare var Search : Ext.field.SearchStatic;
}

module Ext.tab{
export class PanelStatic extends Ext.ContainerStatic {
// Cfg
 cls : any /*String/String[]*/;
 layout : any /*Object/String*/;
 tabBar : Object;
 tabBarDock : String;
 tabBarPosition : String;
 ui : String;
// Properties
// Events
// Methods
 doTabChange(tabBar:Object,newTab:Object) : Boolean;
 getTabBar() : Object;
 getTabBarPosition() : String;
 setTabBar(tabBar:Object) : void;
 setTabBarPosition(tabBarPosition:String) : void;
}
declare var Panel : Ext.tab.PanelStatic;
}

module Ext.device.geolocation{
export class SenchaStatic extends Ext.device.geolocation.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Sencha : Ext.device.geolocation.SenchaStatic;
}

module Ext{
export class ActionSheetStatic extends Ext.SheetStatic {
// Cfg
 baseCls : String;
 bottom : any /*Number/String*/;
 defaultType : String;
 height : any /*Number/String*/;
 left : any /*Number/String*/;
 right : any /*Number/String*/;
// Properties
// Events
// Methods
}
declare var ActionSheet : Ext.ActionSheetStatic;
}

module Ext.fx.animation{
export class SlideStatic extends Ext.fx.animation.AbstractStatic {
// Cfg
 direction : String;
 easing : String;
 offset : Number;
 out : Boolean;
// Properties
// Events
// Methods
 getIsElementBoxFit() : Boolean;
 getOffset() : Number;
 getOut() : Boolean;
 getUseCssTransform() : Boolean;
 setContainerBox(containerBox:String) : void;
 setElementBox(elementBox:String) : void;
 setIsElementBoxFit(isElementBoxFit:Boolean) : void;
 setOffset(offset:Number) : void;
 setOut(out:Boolean) : void;
 setUseCssTransform(useCssTransform:Boolean) : void;
}
declare var Slide : Ext.fx.animation.SlideStatic;
}

module Ext.mixin{
export class TemplatableStatic extends Ext.mixin.MixinStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Templatable : Ext.mixin.TemplatableStatic;
}

/* internal JS type: Object*/module Ext.app{
export class ProfileStatic extends Ext.BaseStatic {
// Cfg
 application : Ext.app.ApplicationStatic;
 controllers : Array;
 models : Array;
 name : String;
 namespace : String;
 stores : Array;
 views : Array;
// Properties
// Events
// Methods
 getApplication() : Ext.app.ApplicationStatic;
 getControllers() : Array;
 getModels() : Array;
 getName() : String;
 getNamespace() : String;
 getStores() : Array;
 getViews() : Array;
 isActive() : Boolean;
 launch() : void;
 setApplication(application:Ext.app.ApplicationStatic) : void;
 setControllers(controllers:Array) : void;
 setModels(models:Array) : void;
 setName(name:String) : void;
 setNamespace(namespace:String) : void;
 setStores(stores:Array) : void;
 setViews(views:Array) : void;
}
declare var Profile : Ext.app.ProfileStatic;
}

module Ext.util{
export class DroppableStatic extends Ext.BaseStatic {
// Cfg
 activeCls : String;
 baseCls : String;
 disabled : Boolean;
 group : String;
 hoverCls : String;
 invalidCls : String;
 validDropMode : String;
// Properties
// Events
 drop(_this:Ext.util.DroppableStatic,draggable:Ext.util.DraggableStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
 dropactivate(_this:Ext.util.DroppableStatic,draggable:Ext.util.DraggableStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
 dropdeactivate(_this:Ext.util.DroppableStatic,draggable:Ext.util.DraggableStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
 dropenter(_this:Ext.util.DroppableStatic,draggable:Ext.util.DraggableStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
 dropleave(_this:Ext.util.DroppableStatic,draggable:Ext.util.DraggableStatic,e:Ext.event.EventStatic,eOpts:Object) : void;
// Methods
 disable() : void;
 enable() : void;
 getBaseCls() : String;
 isDisabled() : Boolean;
 isMonitoring() : Boolean;
 setBaseCls(baseCls:String) : void;
}
declare var Droppable : Ext.util.DroppableStatic;
}

module Ext.carousel{
export class IndicatorStatic extends Ext.ComponentStatic {
// Cfg
 baseCls : String;
// Properties
// Events
 next(_this:Ext.carousel.IndicatorStatic,eOpts:Object) : void;
 previous(_this:Ext.carousel.IndicatorStatic,eOpts:Object) : void;
// Methods
 getDirection() : String;
 setDirection(direction:String) : void;
}
declare var Indicator : Ext.carousel.IndicatorStatic;
}

module Ext.data{
export class JsonPStatic extends Ext.BaseStatic {
// Cfg
// Properties
 callbackKey : String;
 disableCaching : Boolean;
 disableCachingParam : String;
 timeout : Number;
// Events
// Methods
 abort(request:any /*Object/String*/) : void;
 request(options:Object) : Object;
}
declare var JsonP : Ext.data.JsonPStatic;
}

module Ext.layout{
export class FloatStatic extends Ext.layout.DefaultStatic {
// Cfg
// Properties
// Events
// Methods
 getDirection() : String;
 setDirection(direction:String) : void;
}
declare var Float : Ext.layout.FloatStatic;
}

module Ext.event.publisher{
export class ElementSizeStatic extends Ext.event.publisher.PublisherStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var ElementSize : Ext.event.publisher.ElementSizeStatic;
}

module Ext.util.paintmonitor{
export class OverflowChangeStatic extends Ext.util.paintmonitor.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var OverflowChange : Ext.util.paintmonitor.OverflowChangeStatic;
}

module Ext.field{
export class NumberStatic extends Ext.field.TextStatic {
// Cfg
 component : Object;
 maxValue : Number;
 minValue : Number;
 stepValue : Number;
 ui : String;
// Properties
// Events
// Methods
 getMaxValue() : Number;
 getMinValue() : Number;
 getStepValue() : Number;
 setMaxValue(maxValue:Number) : void;
 setMinValue(minValue:Number) : void;
 setStepValue(stepValue:Number) : void;
}
declare var Number : Ext.field.NumberStatic;
}

module Ext.data{
export class RequestStatic extends Ext.BaseStatic {
// Cfg
 action : String;
 callbackKey : String;
 disableCaching : Boolean;
 headers : Object;
 jsonData : Object;
 jsonp : Ext.data.JsonPStatic;
 method : String;
 operation : Ext.data.OperationStatic;
 params : Object;
 password : String;
 proxy : Ext.data.proxy.ProxyStatic;
 url : String;
 username : String;
 withCredentials : Boolean;
 xmlData : Object;
// Properties
// Events
// Methods
 constructor(config:Object);
 getAction() : String;
 getArgs() : Object;
 getCallback() : Object;
 getCallbackKey() : String;
 getDirectFn() : Object;
 getDisableCaching() : Boolean;
 getHeaders() : Object;
 getJsonData() : Object;
 getJsonp() : Ext.data.JsonPStatic;
 getMethod() : String;
 getOperation() : Ext.data.OperationStatic;
 getParams() : Object;
 getPassword() : String;
 getProxy() : Ext.data.proxy.ProxyStatic;
 getRecords() : Object;
 getScope() : Object;
 getTimeout() : Number;
 getUrl() : String;
 getUsername() : String;
 getWithCredentials() : Boolean;
 getXmlData() : Object;
 setAction(action:String) : void;
 setArgs(args:Object) : void;
 setCallback(callback:Object) : void;
 setCallbackKey(callbackKey:String) : void;
 setDirectFn(directFn:Object) : void;
 setDisableCaching(disableCaching:Boolean) : void;
 setHeaders(headers:Object) : void;
 setJsonData(jsonData:Object) : void;
 setJsonp(jsonp:Ext.data.JsonPStatic) : void;
 setMethod(method:String) : void;
 setOperation(operation:Ext.data.OperationStatic) : void;
 setParams(params:Object) : void;
 setPassword(password:String) : void;
 setProxy(proxy:Ext.data.proxy.ProxyStatic) : void;
 setRecords(records:Object) : void;
 setScope(scope:Object) : void;
 setTimeout(timeout:Number) : void;
 setUrl(url:String) : void;
 setUsername(username:String) : void;
 setWithCredentials(withCredentials:Boolean) : void;
 setXmlData(xmlData:Object) : void;
}
declare var Request : Ext.data.RequestStatic;
}

module Ext.device.push{
export class SenchaStatic extends Ext.device.push.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Sencha : Ext.device.push.SenchaStatic;
}

module Ext.app{
export class RouteStatic extends Ext.BaseStatic {
// Cfg
 action : String;
 conditions : Object;
 controller : String;
 url : String;
// Properties
 paramsInMatchString : Object;
// Events
// Methods
 constructor(config:Object);
 getAction() : String;
 getConditions() : Object;
 getController() : String;
 getUrl() : String;
 recognize(url:String) : any /*Object/Boolean*/;
 setAction(action:String) : void;
 setConditions(conditions:Object) : void;
 setController(controller:String) : void;
 setUrl(url:String) : void;
}
declare var Route : Ext.app.RouteStatic;
}

module Ext.util{
export class PaintMonitorStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
}
declare var PaintMonitor : Ext.util.PaintMonitorStatic;
}

module Ext{
export class LoaderStatic {
// Cfg
 disableCaching : Boolean;
 disableCachingParam : String;
 enabled : Boolean;
 paths : Object;
// Properties
 history : Array;
 queue : Array;
// Events
// Methods
 addClassPathMappings(paths:Object) : Ext.LoaderStatic;
 exclude(excludes:Array) : Object;
 getConfig(name:String) : any /*Object/Mixed*/;
 getPath(className:String) : String;
 onReady(fn:Function,scope:Object,withDomReady:Boolean) : void;
 require(expressions:any /*String/Array*/,fn:Function,scope:Object,excludes:any /*String/Array*/) : void;
 setConfig(config:Object) : Ext.LoaderStatic;
 setPath(name:any /*String/Object*/,path:String) : Ext.LoaderStatic;
 syncRequire(expressions:any /*String/Array*/,fn:Function,scope:Object,excludes:any /*String/Array*/) : void;
}
declare var Loader : Ext.LoaderStatic;
}

module Ext.device{
export class NotificationStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor();
}
declare var Notification : Ext.device.NotificationStatic;
}

module Ext{
export class DateExtrasStatic {
// Cfg
// Properties
 DAY : String;
 HOUR : String;
 MILLI : String;
 MINUTE : String;
 MONTH : String;
 SECOND : String;
 YEAR : String;
 dayNames : Array;
 defaultFormat : String;
 defaults : Object;
 formatCodes : Object;
 formatFunctions : Object;
 monthNames : Array;
 monthNumbers : Object;
 parseFunctions : Object;
 useStrict : Boolean;
// Events
// Methods
 add(date:Date,interval:String,value:Number) : Date;
 align(date:Date,unit:String) : Date;
 between(date:Date,start:Date,end:Date) : Boolean;
 clearTime(date:Date,clone:Boolean) : Date;
 clone(date:Date) : Date;
 diff(min:Date,max:Date,unit:String) : Number;
 format(date:Date,format:String) : String;
 getDayOfYear(date:Date) : Number;
 getDaysInMonth(date:Date) : Number;
 getElapsed(dateA:Date,dateB:Date) : Number;
 getFirstDateOfMonth(date:Date) : Date;
 getFirstDayOfMonth(date:Date) : Number;
 getGMTOffset(date:Date,colon:Boolean) : String;
 getLastDateOfMonth(date:Date) : Date;
 getLastDayOfMonth(date:Date) : Number;
 getMonthNumber(name:String) : Number;
 getShortDayName(day:Number) : String;
 getShortMonthName(month:Number) : String;
 getSuffix(date:Date) : String;
 getTimezone(date:Date) : String;
 getWeekOfYear(date:Date) : Number;
 isDST(date:Date) : Boolean;
 isLeapYear(date:Date) : Boolean;
 isValid(year:Number,month:Number,day:Number,hour:Number,minute:Number,second:Number,millisecond:Number) : Boolean;
 now() : Number;
 parse(input:String,format:String,strict:Boolean) : any /*Date/null*/;
}
declare var DateExtras : Ext.DateExtrasStatic;
}

module Ext.device.connection{
export class AbstractStatic extends Ext.EventedStatic {
// Cfg
// Properties
 CELL_2G : String;
 CELL_3G : String;
 CELL_4G : String;
 ETHERNET : String;
 NONE : String;
 UNKNOWN : String;
 WIFI : String;
// Events
// Methods
 getOnline() : Boolean;
 getType() : String;
 isOnline() : Boolean;
 setOnline(online:Boolean) : void;
 setType(type:Object) : void;
}
declare var Abstract : Ext.device.connection.AbstractStatic;
}

module Ext.device.connection{
export class SimulatorStatic extends Ext.device.connection.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Simulator : Ext.device.connection.SimulatorStatic;
}

module Ext.data.identifier{
export class SequentialStatic extends Ext.data.identifier.SimpleStatic {
// Cfg
 prefix : String;
 seed : Number;
// Properties
// Events
// Methods
 getSeed() : Number;
 setSeed(seed:Number) : void;
}
declare var Sequential : Ext.data.identifier.SequentialStatic;
}

module Ext.data{
export class JsonStoreStatic extends Ext.data.StoreStatic {
// Cfg
 proxy : any /*String/Ext.data.proxy.Proxy/Object*/;
// Properties
// Events
// Methods
}
declare var JsonStore : Ext.data.JsonStoreStatic;
}

module Ext.tab{
export class BarStatic extends Ext.ToolbarStatic {
// Cfg
 activeTab : any /*Number/String/Ext.Component*/;
 baseCls : String;
// Properties
// Events
 activetabchange(_this:Ext.tab.BarStatic,value:any /*Number/String/Ext.Component*/,oldValue:any /*Number/String/Ext.Component*/,eOpts:Object) : void;
 tabchange(_this:Ext.tab.BarStatic,newTab:Ext.tab.TabStatic,oldTab:Ext.tab.TabStatic,eOpts:Object) : void;
// Methods
 getActiveTab() : any /*Number/String/Ext.Component*/;
 setActiveTab(activeTab:any /*Number/String/Ext.Component*/) : void;
}
declare var Bar : Ext.tab.BarStatic;
}

/* internal JS type: Array*/module Ext{
export class XTemplateStatic extends Ext.TemplateStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var XTemplate : Ext.XTemplateStatic;
}

module Ext.device.contacts{
export class SenchaStatic extends Ext.device.contacts.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Sencha : Ext.device.contacts.SenchaStatic;
}

module Ext.field{
export class RadioStatic extends Ext.field.CheckboxStatic {
// Cfg
 component : Object;
 ui : String;
// Properties
// Events
// Methods
 getGroupValue() : String;
 setGroupValue(value:String) : Ext.field.RadioStatic;
}
declare var Radio : Ext.field.RadioStatic;
}

module Ext.fx.easing{
export class EaseOutStatic extends Ext.fx.easing.LinearStatic {
// Cfg
// Properties
// Events
// Methods
 getExponent() : Number;
 setExponent(exponent:Number) : void;
}
declare var EaseOut : Ext.fx.easing.EaseOutStatic;
}

module Ext.util.translatable{
export class ScrollPositionStatic extends Ext.util.translatable.DomStatic {
// Cfg
// Properties
// Events
// Methods
 getUseWrapper() : Boolean;
 setUseWrapper(useWrapper:Boolean) : void;
}
declare var ScrollPosition : Ext.util.translatable.ScrollPositionStatic;
}

module Ext.dataview.element{
export class ListStatic extends Ext.dataview.element.ContainerStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var List : Ext.dataview.element.ListStatic;
}

module Ext{
export class ComponentQueryStatic {
// Cfg
// Properties
// Events
// Methods
 is(component:Ext.ComponentStatic,selector:String) : Boolean;
 query(selector:String,root:Ext.ContainerStatic) : Ext.ComponentStatic[];
}
declare var ComponentQuery : Ext.ComponentQueryStatic;
}

module Ext.data{
export class StoreManagerStatic extends Ext.util.CollectionStatic {
// Cfg
// Properties
// Events
// Methods
 lookup(store:any /*String/Object*/) : Ext.data.StoreStatic;
 register(stores:Ext.data.StoreStatic[]) : void;
 unregister(stores:any /*String/Object...*/) : void;
}
declare var StoreManager : Ext.data.StoreManagerStatic;
}

module Ext.mixin{
export class SortableStatic extends Ext.mixin.MixinStatic {
// Cfg
 defaultSortDirection : String;
 sortRoot : String;
 sorters : Array;
// Properties
 currentSortFn : Object;
 dirtySortFn : Boolean;
 sorted : Boolean;
// Events
// Methods
 addSorter(sorter:any /*Ext.util.Sorter/String/Function/Object*/,defaultDirection:String) : void;
 addSorters(sorters:Array,defaultDirection:String) : void;
 findInsertionIndex(items:Array,item:MixedStatic) : Number;
 getDefaultSortDirection() : String;
 getSortFn() : Function;
 getSortRoot() : String;
 getSorters() : Array;
 insertSorter(index:Number,sorter:any /*Ext.util.Sorter/String/Function/Object*/,defaultDirection:String) : void;
 insertSorters(index:Number,sorters:Array,defaultDirection:String) : void;
 removeSorter(sorter:any /*Ext.util.Sorter/String/Function/Object*/) : void;
 removeSorters(sorters:Array) : void;
 setDefaultSortDirection(defaultSortDirection:String) : void;
 setSortRoot(sortRoot:String) : void;
 setSorters(sorters:Array) : void;
 sort(data:Array) : Array;
}
declare var Sortable : Ext.mixin.SortableStatic;
}

module Ext.mixin{
export class BindableStatic extends Ext.mixin.MixinStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var Bindable : Ext.mixin.BindableStatic;
}

module Ext.fx{
export class RunnerStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor();
}
declare var Runner : Ext.fx.RunnerStatic;
}

module Ext.data{
export class OperationStatic extends Ext.BaseStatic {
// Cfg
 action : String;
 batch : Ext.data.BatchStatic;
 callback : Function;
 filters : Ext.util.FilterStatic[];
 group : Ext.util.GrouperStatic;
 grouper : Ext.util.GrouperStatic;
 limit : Number;
 model : Ext.data.ModelStatic;
 params : Object;
 records : Array;
 request : Ext.data.RequestStatic;
 response : Object;
 resultSet : Ext.data.ResultSetStatic;
 scope : Object;
 sorters : Ext.util.SorterStatic[];
 start : Number;
 synchronous : Boolean;
 withCredentials : Boolean;
// Properties
// Events
// Methods
 constructor(config:Object);
 allowWrite() : Boolean;
 getAction() : String;
 getAddRecords() : Boolean;
 getBatch() : Ext.data.BatchStatic;
 getCallback() : Function;
 getError() : any /*String/Object*/;
 getFilters() : Ext.util.FilterStatic[];
 getGrouper() : Ext.util.GrouperStatic;
 getLimit() : Number;
 getModel() : Ext.data.ModelStatic;
 getNode() : Object;
 getPage() : Object;
 getParams() : Object;
 getRequest() : Ext.data.RequestStatic;
 getResponse() : Object;
 getResultSet() : Ext.data.ResultSetStatic;
 getScope() : Object;
 getSorters() : Ext.util.SorterStatic[];
 getStart() : Number;
 getSynchronous() : Boolean;
 getUrl() : Object;
 getWithCredentials() : Boolean;
 hasException() : Boolean;
 isComplete() : Boolean;
 isRunning() : Boolean;
 isStarted() : Boolean;
 setAction(action:String) : void;
 setAddRecords(addRecords:Boolean) : void;
 setBatch(batch:Ext.data.BatchStatic) : void;
 setCallback(callback:Function) : void;
 setCompleted() : void;
 setException(error:any /*String/Object*/) : void;
 setFilters(filters:Ext.util.FilterStatic[]) : void;
 setGrouper(grouper:Ext.util.GrouperStatic) : void;
 setLimit(limit:Number) : void;
 setModel(model:Ext.data.ModelStatic) : void;
 setNode(node:Object) : void;
 setPage(page:Object) : void;
 setParams(params:Object) : void;
 setRecords(records:Array) : void;
 setRequest(request:Ext.data.RequestStatic) : void;
 setResponse(response:Object) : void;
 setResultSet(resultSet:Ext.data.ResultSetStatic) : void;
 setScope(scope:Object) : void;
 setSorters(sorters:Ext.util.SorterStatic[]) : void;
 setStart(start:Number) : void;
 setStarted() : void;
 setSuccessful() : void;
 setSynchronous(synchronous:Boolean) : void;
 setUrl(url:Object) : void;
 setWithCredentials(withCredentials:Boolean) : void;
 wasSuccessful() : Boolean;
}
declare var Operation : Ext.data.OperationStatic;
}

module Ext.event.publisher{
export class ElementPaintStatic extends Ext.event.publisher.PublisherStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var ElementPaint : Ext.event.publisher.ElementPaintStatic;
}

module Ext.util{
export class TranslatableStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
}
declare var Translatable : Ext.util.TranslatableStatic;
}

module Ext.util{
export class OffsetStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(x:Object,y:Object);
}
declare var Offset : Ext.util.OffsetStatic;
}

module Ext.event.publisher{
export class ComponentPaintStatic extends Ext.event.publisher.PublisherStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var ComponentPaint : Ext.event.publisher.ComponentPaintStatic;
}

module Ext.data.proxy{
export class SQLStatic extends Ext.data.proxy.ClientStatic {
// Cfg
// Properties
// Events
// Methods
 getColumns() : String;
 getDatabase() : String;
 getDefaultDateFormat() : String;
 getRecordData(record:Object) : Object;
 getTable() : Object;
 getTableExists() : Boolean;
 getUniqueIdStrategy() : Boolean;
 setColumns(columns:String) : void;
 setDatabase(database:String) : void;
 setDefaultDateFormat(defaultDateFormat:String) : void;
 setTable(table:Object) : void;
 setTableExists(tableExists:Boolean) : void;
 setUniqueIdStrategy(uniqueIdStrategy:Boolean) : void;
}
declare var SQL : Ext.data.proxy.SQLStatic;
}

module Ext.fx.animation{
export class SlideOutStatic extends Ext.fx.animation.SlideStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var SlideOut : Ext.fx.animation.SlideOutStatic;
}

module Ext.util{
export class DelayedTaskStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(fn:Function,scope:Object,args:Array);
 cancel() : void;
 delay(delay:Number,newFn:Function,newScope:Object,newArgs:Array) : void;
 getArgs() : Object;
 getDelay() : Object;
 getFn() : Object;
 getInterval() : Object;
 getScope() : Object;
 setArgs(args:Object) : void;
 setDelay(delay:Object) : void;
 setFn(fn:Object) : void;
 setInterval(interval:Object) : void;
 setScope(scope:Object) : void;
}
declare var DelayedTask : Ext.util.DelayedTaskStatic;
}

module Ext.data{
export class NodeInterfaceStatic extends Ext.BaseStatic {
// Cfg
// Properties
 childNodes : Object;
 firstChild : Object;
 lastChild : Object;
 nextSibling : Object;
 parentNode : Object;
 previousSibling : Object;
// Events
 append(_this:Ext.data.NodeInterfaceStatic,node:Ext.data.NodeInterfaceStatic,index:Number,eOpts:Object) : void;
 beforeappend(_this:Ext.data.NodeInterfaceStatic,node:Ext.data.NodeInterfaceStatic,eOpts:Object) : void;
 beforecollapse(_this:Ext.data.NodeInterfaceStatic,eOpts:Object) : void;
 beforeexpand(_this:Ext.data.NodeInterfaceStatic,eOpts:Object) : void;
 beforeinsert(_this:Ext.data.NodeInterfaceStatic,node:Ext.data.NodeInterfaceStatic,refNode:Ext.data.NodeInterfaceStatic,eOpts:Object) : void;
 beforemove(_this:Ext.data.NodeInterfaceStatic,oldParent:Ext.data.NodeInterfaceStatic,newParent:Ext.data.NodeInterfaceStatic,index:Number,eOpts:Object) : void;
 beforeremove(_this:Ext.data.NodeInterfaceStatic,node:Ext.data.NodeInterfaceStatic,eOpts:Object) : void;
 collapse(_this:Ext.data.NodeInterfaceStatic,eOpts:Object) : void;
 expand(_this:Ext.data.NodeInterfaceStatic,eOpts:Object) : void;
 insert(_this:Ext.data.NodeInterfaceStatic,node:Ext.data.NodeInterfaceStatic,refNode:Ext.data.NodeInterfaceStatic,eOpts:Object) : void;
 move(_this:Ext.data.NodeInterfaceStatic,oldParent:Ext.data.NodeInterfaceStatic,newParent:Ext.data.NodeInterfaceStatic,index:Number,eOpts:Object) : void;
 remove(_this:Ext.data.NodeInterfaceStatic,node:Ext.data.NodeInterfaceStatic,eOpts:Object) : void;
 sort(_this:Ext.data.NodeInterfaceStatic,childNodes:Ext.data.NodeInterfaceStatic[],eOpts:Object) : void;
// Methods
 appendChild(node:any /*Ext.data.NodeInterface/Ext.data.NodeInterface[]*/) : Ext.data.NodeInterfaceStatic;
 bubble(fn:Function,scope:Object,args:Array) : void;
 cascadeBy(fn:Function,scope:Object,args:Array) : void;
 collapse(recursive:Function,callback:Function,scope:Object) : void;
 contains(node:Ext.data.NodeInterfaceStatic) : Boolean;
 copy(id:String,deep:Boolean) : Ext.data.NodeInterfaceStatic;
 eachChild(fn:Function,scope:Object,args:Array) : void;
 expand(recursive:Function,callback:Function,scope:Object) : void;
 findChild(attribute:String,value:Object,deep:Boolean) : Ext.data.NodeInterfaceStatic;
 findChildBy(fn:Function,scope:Object,deep:Boolean) : Ext.data.NodeInterfaceStatic;
 getChildAt(index:Number) : Ext.data.NodeInterfaceStatic;
 getDepth() : Number;
 getPath(field:String,separator:String) : String;
 hasChildNodes() : Boolean;
 indexOf(node:Ext.data.NodeInterfaceStatic) : Number;
 insertBefore(node:Ext.data.NodeInterfaceStatic,refNode:Ext.data.NodeInterfaceStatic) : Ext.data.NodeInterfaceStatic;
 insertChild(index:Number,node:Ext.data.ModelStatic) : Ext.data.ModelStatic;
 isAncestor(node:Ext.data.NodeInterfaceStatic) : Boolean;
 isExpandable() : Boolean;
 isExpanded() : Boolean;
 isFirst() : Boolean;
 isLast() : Boolean;
 isLeaf() : Boolean;
 isLoaded() : Boolean;
 isLoading() : Boolean;
 isRoot() : Boolean;
 isVisible() : Boolean;
 remove(destroy:Boolean) : Ext.data.NodeInterfaceStatic;
 removeAll(destroy:Boolean) : Ext.data.NodeInterfaceStatic;
 removeChild(node:Ext.data.NodeInterfaceStatic,destroy:Boolean) : Ext.data.NodeInterfaceStatic;
 replaceChild(newChild:Ext.data.NodeInterfaceStatic,oldChild:Ext.data.NodeInterfaceStatic) : Ext.data.NodeInterfaceStatic;
 sort(sortFn:Function,recursive:Boolean,suppressEvent:Boolean) : void;
 updateInfo(silent:Object) : Boolean;
}
declare var NodeInterface : Ext.data.NodeInterfaceStatic;
}

module Ext.device{
export class PurchasesStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor();
}
declare var Purchases : Ext.device.PurchasesStatic;
}

module Ext{
export class JSONStatic {
// Cfg
// Properties
// Events
// Methods
 decode(json:String,safe:Boolean) : any /*Object/null*/;
 encode(o:Object) : String;
 encodeDate(d:Date) : String;
}
declare var JSON : Ext.JSONStatic;
}

module Ext.device.connection{
export class SenchaStatic extends Ext.device.connection.AbstractStatic {
// Cfg
// Properties
// Events
 onlinechange(online:Boolean,type:String,eOpts:Object) : void;
// Methods
}
declare var Sencha : Ext.device.connection.SenchaStatic;
}

module Ext.util{
export class PositionMapStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
 getMinimumHeight() : Number;
 setMinimumHeight(minimumHeight:Number) : void;
}
declare var PositionMap : Ext.util.PositionMapStatic;
}

module Ext.fx.layout{
export class CardStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
}
declare var Card : Ext.fx.layout.CardStatic;
}

module Ext.field{
export class SpinnerStatic extends Ext.field.NumberStatic {
// Cfg
 accelerateOnTapHold : Boolean;
 cls : any /*String/String[]*/;
 component : Object;
 cycle : Boolean;
 defaultValue : Number;
 groupButtons : Boolean;
 increment : String;
 incrementValue : String;
 maxValue : Number;
 minValue : Number;
 stepValue : Number;
// Properties
// Events
 //change(_this:Ext.field.TextStatic,newValue:Number,oldValue:Number,eOpts:Object) : void;
 spin(_this:Ext.field.SpinnerStatic,value:Number,direction:String,eOpts:Object) : void;
 spindown(_this:Ext.field.SpinnerStatic,value:Number,eOpts:Object) : void;
 spinup(_this:Ext.field.SpinnerStatic,value:Number,eOpts:Object) : void;
// Methods
 getAccelerateOnTapHold() : Boolean;
 getCycle() : Boolean;
 getDefaultValue() : Number;
 getGroupButtons() : Boolean;
 setAccelerateOnTapHold(accelerateOnTapHold:Boolean) : void;
 setCycle(cycle:Boolean) : void;
 setDefaultValue(defaultValue:Number) : void;
 setGroupButtons(groupButtons:Boolean) : void;
}
declare var Spinner : Ext.field.SpinnerStatic;
}

module Ext{
export class ClassStatic {
// Cfg
 alias : String[];
 alternateClassName : any /*String/String[]*/;
 config : Object;
 extend : String;
 inheritableStatics : Object;
 mixins : Object;
 singleton : Boolean;
 statics : Object;
 uses : String[];
// Properties
// Events
// Methods
 constructor(data:Object,onCreated:Function);
}
declare var Class : Ext.ClassStatic;
}

module Ext.app{
export class HistoryStatic extends Ext.BaseStatic {
// Cfg
 actions : Array;
 token : String;
 updateUrl : Boolean;
// Properties
// Events
 change(url:String,eOpts:Object) : void;
// Methods
 add(action:Ext.app.ActionStatic,silent:Boolean) : void;
 back() : void;
 getActions() : Array;
 getToken() : String;
 getUpdateUrl() : Boolean;
 setActions(actions:Array) : void;
 setToken(token:String) : void;
 setUpdateUrl(updateUrl:Boolean) : void;
}
declare var History : Ext.app.HistoryStatic;
}

module Ext.util{
export class SizeMonitorStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor(config:Object);
}
declare var SizeMonitor : Ext.util.SizeMonitorStatic;
}

module Ext{
export class animsStatic {
// Cfg
// Properties
 cube : Object;
 fade : Object;
 flip : Object;
 pop : Object;
 slide : Object;
 wipe : Object;
// Events
// Methods
}
declare var anims : Ext.animsStatic;
}

module Ext.scroll.indicator{
export class ThrottledStatic extends Ext.scroll.indicator.DefaultStatic {
// Cfg
 cls : any /*String/String[]*/;
// Properties
// Events
// Methods
}
declare var Throttled : Ext.scroll.indicator.ThrottledStatic;
}

module Ext.mixin{
export class SelectableStatic extends Ext.mixin.MixinStatic {
// Cfg
 allowDeselect : Boolean;
 deselectOnContainerClick : Boolean;
 disableSelection : Boolean;
 locked : Boolean;
 mode : String;
// Properties
// Events
 beforeselectionchange(_this:Ext.mixin.SelectableStatic,eOpts:Object) : void;
 selectionchange(_this:Ext.mixin.SelectableStatic,records:Ext.data.ModelStatic[],eOpts:Object) : void;
// Methods
 clearSelections() : void;
 deselect(records:any /*Number/Array/Ext.data.Model*/,suppressEvent:Boolean) : void;
 deselectAll(supress:Object) : void;
 doDeselect(records:any /*Ext.data.Model/Number*/,suppressEvent:Boolean) : void;
 doSelect(records:any /*Ext.data.Model/Number*/,keepExisting:Boolean,suppressEvent:Boolean) : void;
 getAllowDeselect() : Boolean;
 getCount() : Number;
 getDeselectOnContainerClick() : Boolean;
 getDisableSelection() : Boolean;
 getLastSelected() : Array;
 getMode() : String;
 getSelection() : Array;
 getSelectionCount() : Number;
 getSelectionMode() : String;
 hasSelection() : Boolean;
 isLocked() : Boolean;
 isSelected(record:any /*Ext.data.Model/Number*/) : Boolean;
 select(records:any /*Ext.data.Model/Array/Number*/,keepExisting:Boolean,suppressEvent:Boolean) : void;
 selectAll(silent:Boolean) : void;
 selectRange(startRow:Number,endRow:Number,keepExisting:Boolean) : void;
 setAllowDeselect(allowDeselect:Boolean) : void;
 setDeselectOnContainerClick(deselectOnContainerClick:Boolean) : void;
 setDisableSelection(disableSelection:Boolean) : void;
 setLastFocused() : void;
 setMode(mode:String) : void;
 updateLastFocused(newRecord:Ext.data.RecordStatic,oldRecord:Ext.data.RecordStatic) : void;
}
declare var Selectable : Ext.mixin.SelectableStatic;
}

/* internal JS type: Number*/module Ext.field{
export class ToggleStatic extends Ext.field.SliderStatic {
// Cfg
 cls : any /*String/String[]*/;
 maxValueCls : String;
 minValueCls : String;
// Properties
// Events
 //change(me:Ext.field.ToggleStatic,newValue:Number,oldValue:Number,eOpts:Object) : void;
// Methods
 getMaxValueCls() : String;
 getMinValueCls() : String;
 setMaxValueCls(maxValueCls:String) : void;
 setMinValueCls(minValueCls:String) : void;
 toggle() : Object;
}
declare var Toggle : Ext.field.ToggleStatic;
}

module Ext.data.proxy{
export class MemoryStatic extends Ext.data.proxy.ClientStatic {
// Cfg
 data : Object;
// Properties
// Events
// Methods
 getData() : Object;
 setData(data:Object) : void;
}
declare var Memory : Ext.data.proxy.MemoryStatic;
}

module Ext.data{
export class ValidationsStatic extends Ext.BaseStatic {
// Cfg
// Properties
 emailMessage : String;
 emailRe : RegExp;
 exclusionMessage : String;
 formatMessage : Boolean;
 inclusionMessage : String;
 lengthMessage : String;
 presenceMessage : String;
// Events
// Methods
 constructor(config:Object);
 email(config:Object,email:String) : Boolean;
 exclusion(config:Object,value:String) : Boolean;
 format(config:Object,value:String) : Boolean;
 getMessage(type:String) : Object;
 inclusion(config:Object,value:String) : Boolean;
 length(config:Object,value:String) : Boolean;
 presence(config:Object,value:Object) : Boolean;
}
declare var Validations : Ext.data.ValidationsStatic;
}

module Ext{
export class FunctionStatic {
// Cfg
// Properties
// Events
// Methods
 alias(object:any /*Object/Function*/,methodName:String) : Function;
 bind(fn:Function,scope:Object,args:Array,appendArgs:any /*Boolean/Number*/) : Function;
 clone(method:Function) : Function;
 createBuffered(fn:Function,buffer:Number,scope:Object,args:Array) : Function;
 createDelayed(fn:Function,delay:Number,scope:Object,args:Array,appendArgs:any /*Boolean/Number*/) : Function;
 createDelegate(fn:Function,scope:Object,args:Array,appendArgs:any /*Boolean/Number*/) : Function;
 createInterceptor(origFn:Function,newFn:Function,scope:Object,returnValue:Object) : Function;
 createSequence(originalFn:Function,newFn:Function,scope:Object) : Function;
 createThrottled(fn:Function,interval:Number,scope:Object) : Function;
 defer(fn:Function,millis:Number,scope:Object,args:Array,appendArgs:any /*Boolean/Number*/) : Number;
 flexSetter(setter:Function) : Function;
 pass(fn:Function,args:Array,scope:Object) : Function;
}
declare var Function : Ext.FunctionStatic;
}

module Ext.device.connection{
export class PhoneGapStatic extends Ext.device.connection.AbstractStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var PhoneGap : Ext.device.connection.PhoneGapStatic;
}

module Ext.scroll{
export class ScrollerStatic extends Ext.EventedStatic {
// Cfg
 acceleration : Number;
 direction : String;
 directionLock : Boolean;
 disabled : Boolean;
 friction : Number;
 initialOffset : any /*Object/Number*/;
 momentumEasing : Object;
 slotSnapSize : any /*Number/Object*/;
// Properties
// Events
 maxpositionchange(_this:Ext.scroll.ScrollerStatic,maxPosition:Number,eOpts:Object) : void;
 refresh(_this:Ext.scroll.ScrollerStatic,eOpts:Object) : void;
 scroll(_this:Ext.scroll.ScrollerStatic,x:Number,y:Number,eOpts:Object) : void;
 scrollend(_this:Ext.scroll.ScrollerStatic,x:Number,y:Number,eOpts:Object) : void;
 scrollstart(_this:Ext.scroll.ScrollerStatic,x:Number,y:Number,eOpts:Object) : void;
// Methods
 getDirection() : String;
 getDirectionLock() : Boolean;
 getDisabled() : Boolean;
 getInitialOffset() : any /*Object/Number*/;
 getMomentumEasing() : Object;
 getSlotSnapEasing() : Object;
 getSlotSnapSize() : any /*Number/Object*/;
 getTranslatable() : Object;
 isAxisEnabled(axis:String) : Boolean;
 scrollBy(x:Number,y:Number,animation:any /*Boolean/Object*/) : Ext.scroll.ScrollerStatic;
 scrollTo(x:Number,y:Number,animation:any /*Boolean/Object*/) : Ext.scroll.ScrollerStatic;
 scrollToEnd(animation:Object) : Ext.scroll.ScrollerStatic;
 setDirection(direction:String) : void;
 setDirectionLock(directionLock:Boolean) : void;
 setDisabled(disabled:Boolean) : void;
 setInitialOffset(initialOffset:any /*Object/Number*/) : void;
 setMomentumEasing(momentumEasing:Object) : void;
 setOffset(offset:Object) : Ext.scroll.ScrollerStatic;
 setSlotSnapEasing(slotSnapEasing:Object) : void;
 setSlotSnapSize(slotSnapSize:any /*Number/Object*/) : void;
 setTranslatable(translatable:Object) : void;
 updateBoundary() : Ext.scroll.ScrollerStatic;
}
declare var Scroller : Ext.scroll.ScrollerStatic;
}

module Ext{
export class RouterStatic {
// Cfg
// Properties
// Events
// Methods
 setAppInstance(app:Object) : void;
}
declare var Router : Ext.RouterStatic;
}

module Ext.fx.runner{
export class CssTransitionStatic extends Ext.fx.runner.CssStatic {
// Cfg
// Properties
// Events
// Methods
}
declare var CssTransition : Ext.fx.runner.CssTransitionStatic;
}

module Ext.data{
export class ModelManagerStatic extends Ext.AbstractManagerStatic {
// Cfg
// Properties
 associationStack : Object;
 defaultProxyType : Object;
// Events
// Methods
 getModel(id:any /*String/Object*/) : Ext.data.ModelStatic;
}
declare var ModelManager : Ext.data.ModelManagerStatic;
}

module Ext{
export class StringStatic {
// Cfg
// Properties
// Events
// Methods
 capitalize(string:String) : String;
 ellipsis(value:String,length:Number,word:Boolean) : String;
 escape(string:String) : String;
 escapeRegex(string:String) : String;
 format(string:String,value1:String,value2:String) : String;
 htmlDecode(value:String) : String;
 htmlEncode(value:String) : String;
 leftPad(string:String,size:Number,character:String) : String;
 repeat(pattern:String,count:Number,sep:String) : void;
 toggle(string:String,value:String,other:String) : String;
 trim(string:String) : String;
 urlAppend(url:String,string:String) : String;
}
declare var String : Ext.StringStatic;
}

module Ext{
export class TaskQueueStatic extends Ext.BaseStatic {
// Cfg
// Properties
// Events
// Methods
 constructor();
}
declare var TaskQueue : Ext.TaskQueueStatic;
}
