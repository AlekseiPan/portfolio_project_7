c();async function c(){await ymaps3.ready;let{YMap:n,YMapDefaultSchemeLayer:t,YMapDefaultFeaturesLayer:m,YMapMarker:d}=ymaps3,a=new n(document.getElementById("map"),{location:{center:[46.010245,51.538828],zoom:13}});a.addChild(new t),a.addChild(new m);let e=document.createElement("div");e.className="page-main__map-marker";let r=new d({coordinates:[46.010245,51.538828]},e);a.addChild(r)}