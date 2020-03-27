//
//  SplashInteractor.swift
//  Insocio
//
//  Created by Michael Westbrooks on 3/27/20.
//  Copyright (c) 2020 RedRooster Technologies Inc.. All rights reserved.
//
//  This file was generated by the Clean Swift Xcode Templates so
//  you can apply clean architecture to your iOS and Mac projects,
//  see http://clean-swift.com
//

import UIKit

protocol SplashBusinessLogic
{
  func doSomething(request: Splash.Something.Request)
}

protocol SplashDataStore
{
  //var name: String { get set }
}

class SplashInteractor: SplashBusinessLogic, SplashDataStore
{
  var presenter: SplashPresentationLogic?
  var worker: SplashWorker?
  //var name: String = ""
  
  // MARK: Do something
  
  func doSomething(request: Splash.Something.Request)
  {
    worker = SplashWorker()
    worker?.doSomeWork()
    
    let response = Splash.Something.Response()
    presenter?.presentSomething(response: response)
  }
}