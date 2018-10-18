/********* Toast.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>

@interface Toast : CDVPlugin {
  // Member variables go here.
}

- (void)showToast:(CDVInvokedUrlCommand*)command;
@end

@implementation Toast

- (void)showToast:(CDVInvokedUrlCommand*)command
{
    NSLog(@"2323");
    CDVPluginResult* pluginResult = nil;
    NSString* echo = [command.arguments objectAtIndex:0];

    if (echo != nil && [echo length] > 0) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
