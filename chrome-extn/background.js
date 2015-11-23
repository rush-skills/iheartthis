// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function normalOnClick(info, tab) {
  var newURL = "http://localhost:3000/new?imageurl="+info.srcUrl+"&pageurl="+info.pageUrl;
  chrome.tabs.create({ url: newURL });
}
function oneClick(info, tab) {
  var newURL = "http://localhost:3000/fast_new?imageurl="+info.srcUrl+"&pageurl="+info.pageUrl;
  chrome.tabs.create({ url: newURL });
}
// Create one test item for each context type.
var context = "image";
var title = "Add image to I <3 it";

var parent = chrome.contextMenus.create({"title": "I <3 it","contexts":[context]});
var id = chrome.contextMenus.create({"title": "Add","contexts":[context],  "onclick": normalOnClick,"parentId": parent});
var id2 = chrome.contextMenus.create({"title": "Quick add","contexts":[context],  "onclick": oneClick,"parentId": parent});
