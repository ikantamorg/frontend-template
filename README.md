Frontend template for [@IkantamCorp](https://twitter.com/IkantamCorp) front-end developers team workflow.
---

*The purpose of the repository is having a uni guideline for [@IkantamCorp](https://twitter.com/IkantamCorp) front-end developers. This repository has been created by [@ElmahdiMahmoud](https://twitter.com/ElmahdiMahmoud) a front-end engineer at [@IkantamCorp](https://twitter.com/IkantamCorp). The repository packed with the lastest Bootstrap [v3.0.2](http://getbootstrap.com/) and some of our own custom file where .css or .js.*

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
