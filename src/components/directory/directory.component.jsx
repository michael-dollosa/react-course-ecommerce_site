import React from 'react'
import MenuItem from '../menu-item/menu-item.component.jsx'
import './directory.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

const Directory = ({ sections }) => (
  <div className="directory-menu">
  {
      // "...otherSectionProps" - this is equivalent to saying that we want to pass all the props params in the same name fashion
      // ie <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
       sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
      ))
  }
</div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)