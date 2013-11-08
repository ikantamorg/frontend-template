Frontend template starter for front-end developers workflow.
---

The purpose of having this repository is to build a uni guideline for [@IkantamCorp](https://twitter.com/IkantamCorp) front-end developers team. 
The repository has been created by [@ElmahdiMahmoud](https://twitter.com/ElmahdiMahmoud) a front-end engineer at [@IkantamCorp](https://twitter.com/IkantamCorp). 

Packed with: 
---
* The lastest Bootstrap [v3.0.2](http://getbootstrap.com/) 
* [@IkantamCorp](https://twitter.com/IkantamCorp) front-end developers team custom files such as:
** [style.css](https://github.com/ElmahdiMahmoud/frontend-template/blob/master/assets/css/style.css)
** [custom.js](https://github.com/ElmahdiMahmoud/frontend-template/blob/master/assets/js/custom.js)

---

Bootstrap Layout Snippets:
===
HTML: Centerd container
```html
<!-- container -->
<div class="container">
  <!-- CONTENT GOES HERE! -->
</div><!--/ container -->

```
HTML: Left Content col with Right Sidebar
```html
  <!-- row -->
  <div class="row row-offcanvas row-offcanvas-right">
  
    <!-- left content side -->
    <section class="col-xs-12 col-sm-9">
      <!-- CONTENT GOES HERE! -->
    </section>
    <!--/ left content side -->
    
    <!-- right sidebar -->
    <aside class="col-xs-6 col-sm-3 sidebar-offcanvas">
      <!-- WIDGETS GOES HERE! -->
    </aside>
    <!--/ right sidebar -->
    
  </div><!--/ row -->
```

HTML: Right Content col with Left Sidebar:
```html
  <!-- row -->
  <div class="row row-offcanvas row-offcanvas-left">
  
    <!-- left sidebar -->
    <aside class="col-xs-6 col-sm-3 sidebar-offcanvas">
      <!-- WIDGETS GOES HERE! -->
    </aside>
    <!--/ left sidebar -->
    
    <!-- right content side -->
    <section class="col-xs-12 col-sm-9">
      <!-- CONTENT GOES HERE! -->
    </section>
    <!--/ right content side -->
    
  </div><!--/ row -->
```
