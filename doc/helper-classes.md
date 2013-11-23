### Custom Helper Classes:
---

#### Positions
```html
<div class="pos-fxd"></div>
<div class="pos-abs"></div>
<div class="pos-rtv"></div>```

```css
.pos-fxd  { position: fixed; }
.pos-abs  { position: absolute; }
.pos-rtv  { position: relative; }```




#### Outer space with ( margin )

* `class="m-10"`   =  `.m-10   { margin: 10px; }`   
* `class="m-t10"`  =  `.m-t10  { margin-top: 10px; }`
* `class="m-b10"`  =  `.m-b10  { margin-bottom: 10px; }`
* `class="m-tb10"` =  `.m-tb10 { margin-top: 10px; margin-bottom: 10px; }`


#### Inner space with ( padding )

* `class="p-10"`   =  `.p-10   { padding: 10px; }`   
* `class="p-t10"`  =  `.p-t10  { padding-top: 10px; }`
* `class="p-b10"`  =  `.p-b10  { padding-bottom: 10px; }`
* `class="p-tb10"` =  `.p-tb10 { padding-top: 10px; padding-bottom: 10px; }`

--
### [Bootstrap Helper classes v3.0.2](http://getbootstrap.com/css/#helper-classes)
---

#### Quick floats
* `class="pull-left"`   =  `.pull-left  { float: left !important; }`   
* `class="pull-right"`  =  `.pull-right { float: right !important; }`   

#### Center content blocks
* `class="center-block"` =  `.center-block { display: block; margin-left: auto; margin-right: auto; }`  

#### Showing and hiding content
* `class="show"`   =  `.show { display: block !important;}`    
* `class="hidden"` =  `.hidden { display: none !important; visibility: hidden !important; }`

> Furthermore, `.invisible` can be used to toggle only the visibility of an element, meaning its `display` is not modified and the element can still affect the flow of the document.

* `class="invisible"` =  `.invisible { visibility: hidden; }`

### Responsive utilities

|  Class        | <768px      | ≥768px        | ≥992px       | ≥1200px     |
| --------------|:-----------:| -------------:| ------------:| -----------:|
| .visible-xs   | **Visible** |  Hidden       | Hidden       | Hidden      |
| .visible-sm   | Hidden      |  **Visible**  | Hidden       | Hidden      |
| .visible-md   | Hidden      |  Hidden       | **Visible**  | Hidden      |
| .visible-lg   | Hidden      |  Hidden       | Hidden       | **Visible** |
| .hidden-xs    | Hidden      |  **Visible**  | **Visible**  | **Visible** |
| .hidden-sm    | **Visible** |  Hidden       | **Visible**  | **Visible** |
| .hidden-md    | **Visible** |  **Visible**  | Hidden       | **Visible** |
| .hidden-lg    | **Visible** |  **Visible**  | **Visible**  | Hidden      |


#### Print classes
|  Class         | Browser     | Print       |
| ---------------|:-----------:| ------------|
| .visible-print | Hidden      | **Visible** |
| .hidden-print  | **Visible** | Hidden      |

