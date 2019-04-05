import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '../../components/SectionHeader'

class EducationItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, graduation_date } = this.props.frontmatter;
        const { html } = this.props;
        return (
            <div className="contact-item box">
                <div className="columns">
                    <div className="column is-2 is-paddingless flex-centered">
                        <span class="tag">
                            {graduation_date}
                        </span>
                    </div>
                    <div className="column is-10">
                        <div className="content">
                            <span className="is-size-5 is-underlined">
                                {title}
                            </span>
                            <div dangerouslySetInnerHTML={{ __html: html}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

EducationItem.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        weight: PropTypes.number,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
        graduation_date: PropTypes.string,
        display_date: PropTypes.string,
    }),
    html: PropTypes.string
}

export default class EducationTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { elements } = this.props;
        const children = elements.map(function(edge) {
            return <EducationItem key={edge.node.id} {...edge.node} />
          })
        return (
            <div>
                <SectionHeader title="Education" />
                <div>
                    {children}
                </div>
            </div>
        )
    }
}

EducationTemplate.propTypes = {
    elements: PropTypes.object
}