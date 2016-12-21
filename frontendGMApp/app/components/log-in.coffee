`import Ember from "ember"`
`import constants from "frontend-upgrade/utils/constants"`

view = Ember.Component.extend
  templateName: 'components/login'


  onFailure: (error)->
    console.log(error)


`export default view`
