// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
  var newURL = "http://localhost:3000/new?imageurl="+info.srcUrl+"&pageurl="+info.pageUrl;
  chrome.tabs.create({ url: newURL });
}

// Create one test item for each context type.
var contexts = ["image"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Add image to I <3 it";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": genericOnClick});
  console.log("'" + context + "' item:" + id);
}
