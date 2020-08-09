import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import './App.css';

// Hard coded data for the time being
// Goal to fetch from JSON file once basic structure is achieved

const data = {
  "type": "folder",
  "name": "root",
  "modified": "2020-08-08T00:00:00.000Z",
  "size": 100,
  "children": [
  {
      "type": "folder",
      "name": "documents",
      "modified": "2020-08-07T00:00:00.000Z",
      "size": 10,
      "children": [
        {
          "type": "file",
          "name": "document.txt",
          "modified": "2020-08-06T00:00:00.000Z",
          "size": 80,
          "children": []
      }
      ]
  },
  {
      "type": "file",
      "name": "home.html",
      "modified": "2020-08-06T00:00:00.000Z",
      "size": 80,
      "children": []
  },
  {
      "type": "file",
      "name": "about.html",
      "modified": "2020-08-05T00:00:00.000Z",
      "size": 10,
      "children": []
  }
  ]
}

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function RecursiveTreeView() {
  const classes = useStyles();

  const renderFolderTree = (folders) => (
    <TreeItem key={folders.name} nodeId={folders.name} label={folders.name}>
      {Array.isArray(folders.children) ? folders.children.map((node) => renderFolderTree(node)) : null}
    </TreeItem>
  );

  return (
    <>
      <div className="left">
        <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={['root']}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {renderFolderTree(data)}
      </TreeView>
      </div>
      <div className="right">
        {/* Folder contents will render here */}
      </div>
    </>
  );
}
