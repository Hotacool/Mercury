//
//  EnterPage.swift
//  Mercury
//
//  Created by macbook on 17/2/17.
//  Copyright © 2017年 Hotacool. All rights reserved.
//

import UIKit
import React

class EnterPage: UIViewController, UITableViewDelegate, UITableViewDataSource {
    var tableView: UITableView!
    var dataArray = NSMutableArray()
    let cellID = "testCellID"
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.title = "Choose"
        self.dataArray = ["GameScene",
                          "React Native"]
        
        tableView = UITableView()
        tableView.delegate = self;
        tableView.dataSource = self;
        tableView.register(UITableViewCell.classForCoder(), forCellReuseIdentifier: cellID)
        tableView.frame = CGRect(x: 0, y: 0, width: self.view.bounds.width, height: self.view.bounds.height)
        self.view.addSubview(tableView)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: cellID)
        cell?.textLabel?.text = (dataArray[indexPath.row] as! String)
        return cell!
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return dataArray.count
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
        print("select at index \(indexPath.row)")
        switch indexPath.row {
        case 0:
            self.navigationController?.pushViewController(GameViewController(), animated: true)
        case 1:
            let jsCodeLocation: NSURL = NSURL(string: "http://localhost:8081/index.ios.bundle?platform=ios")!
            let rootView = RCTRootView.init(bundleURL: jsCodeLocation as URL!,
                                        moduleName: "RNHighScores",
                                        initialProperties: ["scores":[["name":"Alex",
                                                                       "value":"42"],
                                                                      ["name":"Joel",
                                                                       "value":"10"],]],
                                        launchOptions: nil)
            let reactViewController = UIViewController()
            reactViewController.view = rootView
            self.navigationController?.pushViewController(reactViewController, animated: true)
            
        default:
            break
        }
    }
}
