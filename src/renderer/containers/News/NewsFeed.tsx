import React, { useState, useLayoutEffect, useRef, useCallback } from 'react'
import useNewsSearch from './useNewsSearch'
import { connect } from 'react-redux'
import { NewsCard } from '../../components/News'
import DataSection from '../../components/shared/DataSection'
import * as actions from './actions'
import { NewsAction } from './actions'
import { NewsState } from './types'
import { PageBar } from '../../components/TabBar'
import { HexLoader } from '../../components/Loaders'
import { Paginator } from '../../components/Schedule'

export interface Props {
  fetchData: (pageNumber: number) => Promise<NewsAction>
  loading: boolean
  error: boolean
  newsData: any
  pageNumber: number
}

const NewsFeed = ({
  fetchData,
  error,
  loading,
  newsData,
  pageNumber,
}: {
  fetchData: (pageNumber: number) => Promise<NewsAction>
  loading: boolean
  error: boolean
  newsData: []
  pageNumber: number
}) => {
  useLayoutEffect(() => {
    fetchData(pageNumber)
  }, [])

  const posts = newsData.map((news: any) => (
    <NewsCard
      key={news.blogId}
      blogId={news.blogId}
      blogImageUrl={`https:${news.thumbnail.url}`}
      blogTitle={news.title}
      blogTopic={news.siteCategory}
      blogSummary={news.summary}
      datePublished={news.publish}
    />
  ))

  const nextPage = (page: number) => {
    let newPage = page
    if (page < 129) {
      newPage++
    } else {
      newPage = 129
    }
    return newPage
  }

  const prevPage = (page: number) => {
    let newPage = page
    if (page > 1) {
      newPage--
    } else {
      newPage = 1
    }
    return newPage
  }

  return (
    <PageBar currentTab={3}>
      <>
        <Paginator
          text={`League News: Page ${pageNumber}`}
          nextPage={() => {
            const next = nextPage(pageNumber)
            fetchData(next)
          }}
          prevPage={() => {
            const prev = prevPage(pageNumber)
            fetchData(prev)
          }}
          disableNext={loading || pageNumber === 129}
          disablePrev={loading || pageNumber === 1}
        />
        <DataSection>
          {loading && <HexLoader />}
          {error && 'error loading Match'}
          {!loading && !error && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'none',
                marginTop: '50px',
              }}
            >
              {posts}
            </div>
          )}
        </DataSection>
      </>
    </PageBar>
  )
}

const mapStateToProps = ({ news }: { news: NewsState }): any => ({
  loading: news.loading,
  error: news.error,
  newsData: news.newsData,
  pageNumber: news.pageNumber,
})

export default connect<NewsState, Props>(
  // @ts-ignore
  mapStateToProps,
  actions
)(NewsFeed)
