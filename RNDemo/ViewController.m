//
//  ViewController.m
//  RNDemo
//
//  Created by hitao on 15/12/10.
//  Copyright © 2015年 hitao. All rights reserved.
//

#import "ViewController.h"
#import <RCTRootView.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
//    NSString *urlString = @"http://localhost:8081/react-native-refreshable-listview/test/RefreshableListViewTest/index.ios.bundle";
    NSString *urlString = [[NSBundle mainBundle] pathForResource:@"codepush" ofType:@"js"];
    NSURL *jsCodeLocation = [NSURL URLWithString:urlString];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:@"SimpleApp" initialProperties:nil launchOptions:nil];
    [self.view addSubview:rootView];
    rootView.frame = CGRectMake(0, 20, CGRectGetWidth(self.view.bounds), CGRectGetHeight(self.view.bounds)-20);
    rootView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
