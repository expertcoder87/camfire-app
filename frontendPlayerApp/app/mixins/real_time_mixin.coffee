#####################################################################
# Copyright (C) 2015 Navyug Infosolutions Pvt Ltd.
# Developer : Ranu Pratap Singh
# Email : ranu.singh@navyuginfo.com
# Created Date : 12/1/15
#####################################################################
`import Ember from 'ember'`
`import constants from 'frontend-upgrade/utils/constants'`

# controller wrapping the realtime update library client
# A controller, rather than a mixin is used to ensure that only one instance of realtime client exist in the whole app
# This controller will be having a singleton instance and other controllers should need it to subscribe channels

mixin = Ember.Mixin.create
  rtClient: null		# realtime library client
# @param channel the channel url to subscribe
# @param callback the callback which will be called with payload
# @param context the context in which the callback will be called
  subscribe: (channel, callback, context)->
    context = context || this
    @get('rtClient').subscribe channel, (payload)->
      callback.call context, payload
# @param channel the channel url to unsubscribe
  unsubscribe: (channel)->
    @get('rtClient').unsubscribe(channel)

# @param channel the channel to publish on
# @param payload the plain object payload to publish
# @return the promise which settles on the response
  publish: (channel, payload)->
    @get('rtClient').publish(channel, payload)

  init: ()->
    @_super()
    client = new Faye.Client(constants.FAYE_URL)
    client.addExtension			# communicating by sending csrf-token if available
      outgoing: (message, callback) ->
        message.ext = message.ext || {}
        message.ext.csrfToken = $('meta[name=csrf-token]').attr('content')
        callback(message)
    @set 'rtClient', client

`export default mixin`
