!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),a=null;t.addEventListener("click",(function(){a=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));n.style.background=t}),1e3),t.disabled=!0,e.disabled}));e.addEventListener("click",(function(){clearInterval(a),t.disabled,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.cbfad0a1.js.map
