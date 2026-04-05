'use client';

import React, { useState } from 'react';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { StarIcon } from '@heroicons/react/24/outline';

const RATING_DISTRIBUTION = [
{ stars: 5, count: 634, pct: 75 },
{ stars: 4, count: 152, pct: 18 },
{ stars: 3, count: 42, pct: 5 },
{ stars: 2, count: 12, pct: 1 },
{ stars: 1, count: 7, pct: 1 }];


const REVIEWS = [
{
  id: 1,
  name: 'Samantha K.',
  location: 'Portland, OR',
  rating: 5,
  date: 'March 2026',
  fabric: 'Lucky Turquoise',
  title: 'Absolute showstopper in my living room',
  body: 'I was nervous ordering furniture online, but this sofa exceeded every expectation. The turquoise fabric is even more vibrant in person, and the quality of the frame is exceptional. My guests always comment on it first.',
  helpful: 47,
  verified: true,
  image: "https://images.unsplash.com/photo-1655360997312-6fe29dc4b959"
},
{
  id: 2,
  name: 'Marcus T.',
  location: 'Austin, TX',
  rating: 5,
  date: 'February 2026',
  fabric: 'Essence Ash',
  title: 'Worth every penny — built to last',
  body: 'The craftsmanship is remarkable. I\'ve had designer furniture that doesn\'t come close to this quality. The swoop arms are perfectly proportioned and the tufting is immaculate. Delivery team was professional and careful.',
  helpful: 31,
  verified: true,
  image: null
},
{
  id: 3,
  name: 'Priya M.',
  location: 'New York, NY',
  rating: 4,
  date: 'January 2026',
  fabric: 'Vibe Aquatic',
  title: 'Beautiful piece, slight delivery delay',
  body: 'The sofa itself is stunning — exactly as pictured and the velvet is incredibly soft. Only minor issue was a 2-week delay from the original estimate, but customer service kept me updated throughout. Would absolutely buy again.',
  helpful: 23,
  verified: true,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16200f588-1775174363443.png"
}];


function StarDisplay({ rating, size = 'sm' }: {rating: number;size?: 'sm' | 'md';}) {
  const sz = size === 'sm' ? 'w-3.5 h-3.5' : 'w-5 h-5';
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) =>
      s <= rating ?
      <StarSolid key={s} className={`${sz} text-amber-400`} /> :
      <StarIcon key={s} className={`${sz} text-amber-200`} />
      )}
    </div>);

}

export default function ReviewsSection() {
  const [sortBy, setSortBy] = useState('recent');
  const [filterRating, setFilterRating] = useState(0);

  const filteredReviews = REVIEWS.filter((r) => filterRating === 0 || r.rating === filterRating);

  return (
    <section className="bg-[var(--bg-warm)] py-16 md:py-20" id="reviews" aria-label="Customer reviews">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-2 block">Customer Reviews</span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--text-primary)]">
              What our customers say
            </h2>
          </div>
          <div className="flex gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[var(--border-light)] rounded-xl px-4 py-2 bg-white text-[var(--text-secondary)] focus:outline-none focus:border-brand-teal">
              
              <option value="recent">Most Recent</option>
              <option value="helpful">Most Helpful</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Rating summary */}
          <div className="bg-white rounded-3xl p-6 shadow-soft self-start">
            <div className="text-center mb-6">
              <div className="font-display text-6xl font-light text-[var(--text-primary)]">4.8</div>
              <StarDisplay rating={5} size="md" />
              <p className="text-sm text-[var(--text-muted)] mt-1">847 verified reviews</p>
            </div>

            <div className="space-y-2.5">
              {RATING_DISTRIBUTION.map((r) =>
              <button
                key={r.stars}
                onClick={() => setFilterRating(filterRating === r.stars ? 0 : r.stars)}
                className={`w-full flex items-center gap-3 group transition-all rounded-lg p-1.5 -mx-1.5 ${
                filterRating === r.stars ? 'bg-brand-teal/5' : 'hover:bg-[var(--bg-warm)]'}`
                }>
                
                  <span className="text-xs font-medium text-[var(--text-muted)] w-4">{r.stars}</span>
                  <StarSolid className="w-3 h-3 text-amber-400 flex-shrink-0" />
                  <div className="flex-1 h-2 bg-[var(--bg-warm)] rounded-full overflow-hidden">
                    <div
                    className="h-full review-bar-fill rounded-full"
                    style={{ width: `${r.pct}%` }} />
                  
                  </div>
                  <span className="text-xs text-[var(--text-muted)] w-7 text-right">{r.pct}%</span>
                </button>
              )}
            </div>

            <button className="w-full mt-6 py-3 btn-primary rounded-xl text-sm font-semibold">
              Write a Review
            </button>
          </div>

          {/* Reviews list */}
          <div className="lg:col-span-2 space-y-5">
            {filterRating > 0 &&
            <div className="flex items-center gap-2">
                <span className="text-sm text-[var(--text-muted)]">Filtered by:</span>
                <button
                onClick={() => setFilterRating(0)}
                className="flex items-center gap-1.5 bg-brand-teal/10 text-brand-teal text-xs font-semibold px-3 py-1 rounded-full hover:bg-brand-teal/20 transition-colors">
                
                  {filterRating} stars
                  <span className="text-brand-teal/60">×</span>
                </button>
              </div>
            }

            {filteredReviews.length === 0 ?
            <div className="text-center py-12 text-[var(--text-muted)]">
                No reviews match this filter.
              </div> :

            filteredReviews.map((review) =>
            <div key={review.id} className="bg-white rounded-2xl p-6 shadow-soft border border-[var(--border-light)]">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal/20 to-brand-cognac/20 flex items-center justify-center text-sm font-semibold text-brand-teal flex-shrink-0">
                        {review.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[var(--text-primary)]">{review.name}</span>
                          {review.verified &&
                      <span className="text-[10px] bg-green-50 text-green-600 border border-green-100 px-2 py-0.5 rounded-full font-medium">
                              Verified
                            </span>
                      }
                        </div>
                        <span className="text-xs text-[var(--text-muted)]">{review.location} · {review.date}</span>
                      </div>
                    </div>
                    <StarDisplay rating={review.rating} />
                  </div>

                  <div className="mb-1">
                    <span className="text-xs text-[var(--text-muted)]">Fabric: </span>
                    <span className="text-xs font-medium text-[var(--text-secondary)]">{review.fabric}</span>
                  </div>

                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">{review.title}</h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{review.body}</p>

                  {review.image &&
              <div className="mb-4">
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-[var(--border-light)]">
                        <AppImage
                    src={review.image}
                    alt={`Customer photo of Aubrey Sofa in ${review.fabric} from ${review.name}`}
                    fill
                    className="object-cover"
                    sizes="96px" />
                  
                      </div>
                    </div>
              }

                  <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                    <span>Helpful?</span>
                    <button className="flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
                        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                      </svg>
                      Yes ({review.helpful})
                    </button>
                  </div>
                </div>
            )
            }

            <button className="w-full py-3 border border-[var(--border-light)] rounded-2xl text-sm font-medium text-[var(--text-secondary)] hover:border-[var(--border-medium)] hover:text-[var(--text-primary)] transition-all">
              Load More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>);

}

// Need AppImage import
import AppImage from '@/components/ui/AppImage';