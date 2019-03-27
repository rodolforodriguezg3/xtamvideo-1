// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/Evented ../../../core/accessorSupport/decorators ../../../views/2d/draw/support/Box ../../../views/2d/draw/support/GraphicMover ../../../views/2d/draw/support/Reshape".split(" "), function(m, n, g, c, h, k, b, e, l, f) {
    return function(d) {
        function a() { var a = null !== d && d.apply(this, arguments) || this;
            a.cancelled = !1;
            a.history = { undo: [], redo: [] };
            a.type = null; return a }
        g(a, d);
        Object.defineProperty(a.prototype, "tool", { get: function() { return this.activeComponent instanceof l ? "move" : this.activeComponent instanceof e ? "transform" : this.activeComponent instanceof f ? "reshape" : null }, enumerable: !0, configurable: !0 });
        a.prototype.addToHistory = function(a) { this.history.redo = [];
            this.history.undo.push(a) };
        a.prototype.resetHistory = function() { this.history.redo = [];
            this.history.undo = [] };
        a.prototype.canUndo = function() { return 0 < this.history.undo.length };
        a.prototype.canRedo = function() {
            return 0 <
                this.history.redo.length
        };
        a.prototype.complete = function() { this.cleanUp();
            this.onEnd();
            this.emit("complete") };
        a.prototype.cancel = function() { this._set("cancelled", !0);
            this.cleanUp();
            this.onEnd();
            this.emit("cancel") };
        a.prototype.cleanUp = function() { this.activeComponent.reset() };
        a.prototype.refreshComponent = function() { var a = this.activeComponent;
            a && (a instanceof e || a instanceof f) && a.refresh() };
        c([b.property()], a.prototype, "activeComponent", void 0);
        c([b.property()], a.prototype, "cancelled", void 0);
        c([b.property()],
            a.prototype, "history", void 0);
        c([b.property({ dependsOn: ["activeComponent"] })], a.prototype, "tool", null);
        c([b.property()], a.prototype, "type", void 0);
        c([b.property()], a.prototype, "addToHistory", null);
        c([b.property()], a.prototype, "resetHistory", null);
        c([b.property()], a.prototype, "canUndo", null);
        c([b.property()], a.prototype, "canRedo", null);
        c([b.property()], a.prototype, "complete", null);
        c([b.property()], a.prototype, "cancel", null);
        c([b.property()], a.prototype, "cleanUp", null);
        c([b.property()], a.prototype,
            "refreshComponent", null);
        c([b.property()], a.prototype, "onEnd", void 0);
        c([b.property()], a.prototype, "undo", void 0);
        c([b.property()], a.prototype, "redo", void 0);
        c([b.property()], a.prototype, "toggleTool", void 0);
        c([b.property()], a.prototype, "addToSelection", void 0);
        c([b.property()], a.prototype, "removeFromSelection", void 0);
        return a = c([b.subclass("esri.widgets.Sketch.support.OperationHandle")], a)
    }(b.declared(h, k))
});