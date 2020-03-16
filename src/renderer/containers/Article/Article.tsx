import React, { useLayoutEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { BackToSchedule } from '../../components/MatchSummary'
import DataSection from '../../components/shared/DataSection'
import { Post } from '../../components/News'
import * as actions from './actions'
import { ArticleAction } from './actions'
import { ArticleState } from './types'
import { PageBar } from '../../components/TabBar'
import { HexLoader } from '../../components/Loaders'

export interface Props {
  fetchData: (id: number) => Promise<ArticleAction>
  loading: boolean
  error: boolean
  article: any
}

const Article = (props: Props) => {
  const { id } = useParams()
  const history = useHistory()

  useLayoutEffect(() => {
    props.fetchData(+id!)
  }, [])
  return (
    <PageBar currentTab={3}>
      <>
        <BackToSchedule
          text="Back to Posts"
          back={() => history.push('/news')}
        />
        <DataSection
          style={{
            height: '100%',
            marginTop: '30px',
          }}
        >
          {props.loading && <HexLoader />}
          {props.error && 'error loading post'}
          {!props.loading && !props.error && (
            <div>
              <Post
                title={props.article.title}
                author={props.article.author}
                datePublished={props.article.publish}
                content={props.article.content}
              />
            </div>
          )}
        </DataSection>
      </>
    </PageBar>
  )
}

const mapStateToProps = ({ article }: { article: ArticleState }): any => ({
  loading: article.loading,
  error: article.error,
  article: article.article,
})

export default connect<ArticleState, Props>(
  // @ts-ignore
  mapStateToProps,
  actions
)(Article)
