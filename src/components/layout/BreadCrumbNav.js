import React, { Component } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { titleCase } from '../../utils'


class BreadCrumbNav extends Component {
  
  // pathToName = {
  //   '/login': 'Log In',
  //   '/notes': 'Notes',
  //   '/notes/new': 'New',
  //   '/notes/edit': 'Edit'
  // }

  renderBreadcrumbItems = () => {
    // This item will always be rendered
    const breadcrumbItems = [ <Breadcrumb.Item key={1} href="/">Home</Breadcrumb.Item> ]

    // Get the current URL path
    const path = this.props.location.pathname

    // If the path is '/' we're done
    if (path === '/') {
      return breadcrumbItems
    }

    let currentPath = ''
    const pathItems = path.split('/').filter(pathItem => pathItem !== '')
    
    for ( let i = 0; i < pathItems.length; i++ ) {
      currentPath += `/${pathItems[i]}`
      // If it's the last item, make it active
      const breadcrumbItem = i === pathItems.length - 1 ? 
        <Breadcrumb.Item active key={i+2} href={currentPath}>{titleCase(pathItems[i])}</Breadcrumb.Item>
          :
        <Breadcrumb.Item key={i+2} href={currentPath}>{titleCase(pathItems[i])}</Breadcrumb.Item>

      // Add it to the collection
      breadcrumbItems.push(breadcrumbItem)
    }

    return breadcrumbItems
  }
  
  render() {
    return (
      <Breadcrumb>
        {this.renderBreadcrumbItems()}
      </Breadcrumb>
    )
  }
}


export default withRouter(BreadCrumbNav)
