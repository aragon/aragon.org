
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    import src_pages_Home from '../src/pages/Home'
import src_pages_Core from '../src/pages/Core'
import src_pages_OS from '../src/pages/OS'
import src_pages_Network from '../src/pages/Network'
import src_pages_Foundation from '../src/pages/Foundation'
import src_pages_About from '../src/pages/About'
import src_pages_Join from '../src/pages/Join'
import src_pages_NotFound from '../src/pages/NotFound'
    const templateMap = {
    t_0: src_pages_Home,
t_1: src_pages_Core,
t_2: src_pages_OS,
t_3: src_pages_Network,
t_4: src_pages_Foundation,
t_5: src_pages_About,
t_6: src_pages_Join,
t_7: src_pages_NotFound
  }
    const templateTree = {c:{"404":{t:"t_7"},"/":{t:"t_0"},"core":{t:"t_1"},"os":{t:"t_2"},"network":{t:"t_3"},"foundation":{t:"t_4"},"about":{t:"t_5"},"join":{t:"t_6"}}}
    
    const getTemplateForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }
  

    export default class Routes extends Component {
      render () {
        return (
            
    <Route path='*' render={props => {
      let Template = getTemplateForPath(props.location.pathname)
      if (!Template) {
        Template = getTemplateForPath('404')
      }
      return Template && <Template {...props} />
    }} />
  
        )
      }
    }
  