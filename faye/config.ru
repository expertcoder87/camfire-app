require 'yaml'
require 'faye'

FAYE_CONFIG = YAML.load_file('./config.yml')
Faye::WebSocket.load_adapter(FAYE_CONFIG['adapter'])

faye_server = Faye::RackAdapter.new(:mount => FAYE_CONFIG['mount'], :timeout => 60*FAYE_CONFIG['timeout'].to_i)
begin
  puts 'booting faye server'
  run faye_server
rescue
 	puts 'Faye server failed to run!'
end
