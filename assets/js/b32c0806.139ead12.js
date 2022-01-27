"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77821],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57530:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Built-in Parts",sidebar_label:"Built-in Parts"},p=void 0,s={unversionedId:"guides/extend-builtin-ui",id:"guides/extend-builtin-ui",title:"Built-in Parts",description:"In Molecule, we are based on the 6 core UI modules, and many commonly used UI modules in IDE Workbench are built in by default, so that we can quickly meet the needs of developers. These modules have built-in a series of Service, allowing us to operate or extend through Extension.",source:"@site/docs/guides/extend-builtin-ui.md",sourceDirName:"guides",slug:"/guides/extend-builtin-ui",permalink:"/molecule/docs/next/guides/extend-builtin-ui",editUrl:"https://github.com/DTStack/molecule/edit/main/website/docs/guides/extend-builtin-ui.md",tags:[],version:"current",frontMatter:{title:"Built-in Parts",sidebar_label:"Built-in Parts"},sidebar:"docs",previous:{title:"Workbench",permalink:"/molecule/docs/next/guides/extend-workbench"},next:{title:"Color Theme",permalink:"/molecule/docs/next/guides/extend-color-theme"}},c=[{value:"Explorer",id:"explorer",children:[],level:2},{value:"FolderTree",id:"foldertree",children:[],level:2},{value:"EditorTree",id:"editortree",children:[],level:2},{value:"Search",id:"search",children:[],level:2},{value:"Output",id:"output",children:[],level:2},{value:"Problems",id:"problems",children:[],level:2},{value:"Notification",id:"notification",children:[],level:2}],m={toc:c};function u(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Molecule, we are based on the ",(0,o.kt)("a",{parentName:"p",href:"/molecule/docs/next/guides/extend-workbench"},"6 core UI")," modules, and many commonly used UI modules in IDE Workbench are built in by default, so that we can quickly meet the needs of developers. These modules have built-in a series of ",(0,o.kt)("strong",{parentName:"p"},"Service"),", allowing us to operate or extend through ",(0,o.kt)("strong",{parentName:"p"},"Extension"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"molecule",src:n(5731).Z})),(0,o.kt)("p",null,"As shown in the picture above, the current ",(0,o.kt)("strong",{parentName:"p"},"built-in parts")," mainly include 7 modules: ",(0,o.kt)("a",{parentName:"p",href:"#explorer"},"Explorer"),", ",(0,o.kt)("a",{parentName:"p",href:"#foldertree"},"FolderTree"),", ",(0,o.kt)("a",{parentName:"p",href:"#editortree"},"EditorTree"),", ",(0,o.kt)("a",{parentName:"p",href:"#search"},"Search"),", ",(0,o.kt)("a",{parentName:"p",href:"#output"},"Output"),", ",(0,o.kt)("a",{parentName:"p",href:"#problems"},"Problems")," and ",(0,o.kt)("a",{parentName:"p",href:"#notification"},"Notification"),"."),(0,o.kt)("p",null,"Let's see how to use these parts."),(0,o.kt)("h2",{id:"explorer"},(0,o.kt)("a",{parentName:"h2",href:"../api/classes/molecule.ExplorerService"},"Explorer")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/classes/molecule.ExplorerService"},"Explorer")," as an important ",(0,o.kt)("strong",{parentName:"p"},"navigation")," module in Workbench, it is responsible for displaying the current work ",(0,o.kt)("strong",{parentName:"p"},"directory")," information, as well as the ",(0,o.kt)("strong",{parentName:"p"},"tags")," currently being edited, and related folders and other information."),(0,o.kt)("p",null,"If you want to customize the ",(0,o.kt)("strong",{parentName:"p"},"Action Bar UI"),"\uff0cuse\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"molecule.explore.addAction({\n    id: 'actionId',\n    name: 'actionName',\n    icon: 'add',\n});\n")),(0,o.kt)("p",null,"Add a new ",(0,o.kt)("strong",{parentName:"p"},"panel item"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"molecule.explore.addPanel({\n    id: 'panelId',\n    name: 'panelName',\n    renderPanel: () => <span>Panel Content</span>,\n    toolbar: [],\n});\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.model.IExplorerPanelItem#renderpanel"},(0,o.kt)("inlineCode",{parentName:"a"},"renderPanel"))," returns the content of the custom rendered panel, ",(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.model.IExplorerPanelItem#toolbar"},(0,o.kt)("inlineCode",{parentName:"a"},"toolbar"))," is used to customize the toolbar."),(0,o.kt)("p",null,"Listen to Explorer ",(0,o.kt)("strong",{parentName:"p"},"events"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Listen to the click event of the Toolbar\nmolecule.explore.onPanelToolbarClick(\n    (panel: IExplorerPanelItem, toolbarId: string) => {\n        // do something\n    }\n);\n\n// Remove panel\nmolecule.explore.onRemovePanel((panel: IExplorerPanelItem) => {\n    // do something\n});\n")),(0,o.kt)("p",null,"In addition, we have built-in the ",(0,o.kt)("strong",{parentName:"p"},"Outline")," module by the way, but if you want Outline to work, you need to cooperate with other ",(0,o.kt)("strong",{parentName:"p"},"language")," libraries to implement it."),(0,o.kt)("h2",{id:"foldertree"},(0,o.kt)("a",{parentName:"h2",href:"../api/interfaces/molecule.IFolderTreeService"},"FolderTree")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IFolderTreeService"},"FolderTree")," is the sub-module responsible for ",(0,o.kt)("strong",{parentName:"p"},"file tree")," display in ",(0,o.kt)("a",{parentName:"p",href:"#explorer"},"Explorer"),". Default events such as ",(0,o.kt)("strong",{parentName:"p"},"folder")," creation, ",(0,o.kt)("strong",{parentName:"p"},"file")," creation, and ",(0,o.kt)("strong",{parentName:"p"},"refresh")," are built-in by default."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Add/Remove")," nodes to FolderTree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// Add the tree data into folderTree\nmolecule.folderTree.add({\n     id: 0,\n    name: "Molecule-Demo",\n    fileType: "RootFolder",\n    location: "Molecule-Demo",\n    isLeaf: false,\n    data: "",\n    children: [{\n            id: 1,\n            name: "test.js",\n            location: "Molecule-Demo/test.js",\n            fileType: "File",\n            isLeaf: true,\n            data: {},\n        }]\n    }]\n})\n\n// Remove the tree node which id is 0\nmolecule.folderTree.remove(0);\n')),(0,o.kt)("p",null,"Listen to ",(0,o.kt)("strong",{parentName:"p"},"events")," of FolderTree"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Listen to the create node event\nmolecule.folderTree.onCreate((type: FileType, id?: UniqueId) => {\n    // do something\n});\n\n// Listen to the remove node event\nmolecule.folderTree.onRemove((id?: UniqueId) => {\n    // do something\n});\n\n// Listen to the select node event\nmolecule.folderTree.onSelectFile((file: IFolderTreeNodeProps) => {\n    // do something\n});\n")),(0,o.kt)("p",null,"Enable sorting"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Toggle whether to enable sorting, which is disabled by default.\nmolecule.folderTree.toggleAutoSort();\n")),(0,o.kt)("p",null,"For more information about the use of FolderTree, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../api/classes/molecule.FolderTreeService"},"API")," documentation."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We don't have default node removal logic built into FolderTree, but you can customize it using ",(0,o.kt)("inlineCode",{parentName:"p"},"remove")," method."))),(0,o.kt)("h2",{id:"editortree"},(0,o.kt)("a",{parentName:"h2",href:"../api/interfaces/molecule.IEditorTreeService"},"EditorTree")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IEditorTreeService"},"EditorTree")," is responsible for displaying some ",(0,o.kt)("strong",{parentName:"p"},"editing tags")," currently working in ",(0,o.kt)("a",{parentName:"p",href:"#explorer"},"Explorer"),". Molecule currently does not provide too many APIs to support the extension of this UI, but more basic ",(0,o.kt)("strong",{parentName:"p"},"event handling"),"."),(0,o.kt)("p",null,"Listen to ",(0,o.kt)("strong",{parentName:"p"},"events")," of the basic operations of EditorTree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Listen to the tab close event\nmolecule.editorTree.onClose((tabId: UniqueId, groupId: UniqueId) => {\n    // do something\n});\n\n// Listen to the tab close event\nmolecule.editorTree.onSelect((tabId: UniqueId, groupId: UniqueId) => {\n    // do something\n});\n")),(0,o.kt)("h2",{id:"search"},(0,o.kt)("a",{parentName:"h2",href:"../api/interfaces/molecule.ISearchService"},"Search")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.ISearchService"},"Search")," is a built-in ",(0,o.kt)("strong",{parentName:"p"},"search panel"),", which contains some common ",(0,o.kt)("strong",{parentName:"p"},"search"),", ",(0,o.kt)("strong",{parentName:"p"},"replace")," and other UI functions. The built-in search module of Molecule is just a basic UI module. The specific ",(0,o.kt)("strong",{parentName:"p"},"search")," or ",(0,o.kt)("strong",{parentName:"p"},"replacement")," function needs to be completed by the developer through some APIs:"),(0,o.kt)("p",null,"Listen to the input of the ",(0,o.kt)("strong",{parentName:"p"},"search input control"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Listen to the search input changed\nmolecule.search.onChange((tabId: UniqueId, groupId: UniqueId) => {\n    // do something\n});\n\n// Listen to the event about replace all text in result\nmolecule.search.onReplaceAll((tabId: UniqueId, groupId: UniqueId) => {\n    // do something\n});\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"setResult")," to show search results :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Display the result in panel\nmolecule.search.setResult([]);\n")),(0,o.kt)("h2",{id:"output"},(0,o.kt)("a",{parentName:"h2",href:"../api/interfaces/molecule.IPanelService"},"Output")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IPanelService#appendoutput"},"Output")," panel currently does not provide an independent API ",(0,o.kt)("strong",{parentName:"p"},"service object"),", but encapsulates it in the ",(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IPanelService"},"Panel service")," object. So if you want to update the content in the ",(0,o.kt)("strong",{parentName:"p"},"Output")," component, you should use the following API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"molecule.panel.appendOutput('typing...'); // Append the content into Output\nmolecule.panel.cleanOutput(); // Clean the Output\n")),(0,o.kt)("p",null,"Regarding the detailed use of the search panel, we can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/blob/main/packages/molecule-demo/src/extensions/theFirstExtension/searchPaneController.ts"},"molecule-example")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Output")," and ",(0,o.kt)("strong",{parentName:"p"},"Problems")," are both ",(0,o.kt)("strong",{parentName:"p"},"Panel"),"'s built-in UI components. At present, we do not provide a independent ",(0,o.kt)("strong",{parentName:"p"},"Service")," object for the ",(0,o.kt)("strong",{parentName:"p"},"Output")," panel, and we still need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"molecule.panel")," service to operate."))),(0,o.kt)("h2",{id:"problems"},(0,o.kt)("a",{parentName:"h2",href:"../api/interfaces/molecule.IProblemsService"},"Problems")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IProblemsService"},"Problems")," can be used to show some ",(0,o.kt)("strong",{parentName:"p"},"problems")," in the workspace, such as ",(0,o.kt)("strong",{parentName:"p"},"syntax errors"),", ",(0,o.kt)("strong",{parentName:"p"},"parameter problems"),", etc. Like ",(0,o.kt)("a",{parentName:"p",href:"#output"},"Output"),", it is also a built-in component of ",(0,o.kt)("strong",{parentName:"p"},"Panel"),". But the difference is that we provide an independent service object for ",(0,o.kt)("strong",{parentName:"p"},"Problems"),", and all APIs for Problems operations are like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Add problems Items\nmolecule.problems.add({\n    id: 1,\n    name: 'text.tsx',\n    isLeaf: false,\n    value: {\n        code: 'text.tsx',\n        message: 'Folder',\n        startLineNumber: 0,\n        startColumn: 1,\n        endLineNumber: 0,\n        endColumn: 1,\n        status: 1,\n    },\n    children: [],\n});\n\n// Remove the problems item which the id is 1\nmolecule.problems.remove(1);\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," to add Problems item, and ",(0,o.kt)("inlineCode",{parentName:"p"},"remove")," to remove it."),(0,o.kt)("h2",{id:"notification"},(0,o.kt)("a",{parentName:"h2",href:"../api/interfaces/molecule.INotificationService"},"Notification")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.INotificationService"},"Notification")," is a built-in notification bar UI component, we can use it to achieve common ",(0,o.kt)("strong",{parentName:"p"},"prompts"),", ",(0,o.kt)("strong",{parentName:"p"},"warnings")," and other functions."),(0,o.kt)("p",null,"Add notification content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import molecule from '@dtinsight/molecule';\nimport { INotificationItem } from '@dtinsight/molecule/esm/model';\n\nconst notification: INotificationItem = {\n    id: '1',\n    status: ,\n    render: () => <p>Test notification!</p>\n};\n// Add the notification\nmolecule.notification.add(notification);\n\n// Remove the notification\nmolecule.notification.remove(notification.id);\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("strong",{parentName:"p"},"notification content")," needs to be customized by the developer using the ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," function."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Show/hide")," notification panel:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import molecule from '@dtinsight/molecule';\n// Display or hide the Notification pane\nmolecule.notification.toggleNotification();\n")))}u.isMDXComponent=!0},5731:function(e,t,n){t.Z=n.p+"assets/images/builtin-ui-8652dcc7e534a4f586dd3d328b5fa879.png"}}]);