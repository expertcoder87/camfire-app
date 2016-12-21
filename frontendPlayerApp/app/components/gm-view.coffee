`import Ember from "ember"`

view = Ember.Component.extend(
  templateName: 'gm-view'

  didInsertElement: ->
    $("#owl-demo").owlCarousel({
      navigation : true,        
      slideSpeed : 300,
      items: 1,
      paginationSpeed : false, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
       
      })

)
    
`export default view`
