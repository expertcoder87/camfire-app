`import Ember from "ember"`
`import constants from "frontend-upgrade/utils/constants"`

fileUpload = Ember.Component.extend
  notify: Ember.inject.service('notify')
  url: '',
  payload:'',
  resource:'',
  linkName:'',
  filesize: null,

  actions:

    uploadImage: (file)->
      @set('filesize',file.get('size'))
      if @filesize < 1000000
        that=this
        if @payload and @url and @resource
          file.upload(@url, {data:{resource:@payload}}).then (response) ->
            that.get('updateRecord')(response.body)
        else
          @get('updateRecord')(file)
       else
         @get('notify').info('This image exceeds the maximum upload size(1 MB)')




`export default fileUpload`
