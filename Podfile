platform :ios, "10.0"
use_frameworks!

target 'Mercury' do
	pod 'HACMonitor' ,:git=>"https://github.com/Hotacool/HACMonitor", :tag => '0.1.0'
	pod 'React', :path => 'node_modules/react-native', :subspecs => [
    'Core',
    'RCTText',
    'RCTNetwork',
    'RCTWebSocket', # needed for debugging
    'RCTNetwork',
    # Add any other subspecs you want to use in your project
  ]

end
