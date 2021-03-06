import { createModule, mutation, action, getter } from 'vuex-class-component'
import MatchdayOverview from '@/models/MatchdayOverview'
import http from '@/utils/Http'

const VuexModule = createModule({
  strict: false
})

export class MatchdayOverviewStore extends VuexModule {
  @getter matchdayOverview?: MatchdayOverview
  @getter matchdayOverviewIsLoading: boolean = true
  @getter matchdayOverviewHasError: boolean = false
  @getter matchdayOverviewErrorMsg?: string

  @mutation fetchDataPending(): void {
    this.matchdayOverviewIsLoading = true
    this.matchdayOverviewHasError = false
  }

  @mutation fetchDataSuccess(payload: MatchdayOverview): void {
    this.matchdayOverviewIsLoading = false
    this.matchdayOverviewHasError = false
    this.matchdayOverview = payload
  }
  @mutation fetchDataError(payload: string): void {
    this.matchdayOverviewIsLoading = false
    this.matchdayOverviewHasError = true
    this.matchdayOverviewErrorMsg = payload
  }

  @action async getAllMatchesOfCurrentSeason() {
    this.fetchDataPending()
    try {
      const response = await http.get('/matchdays/current-season')
      this.fetchDataSuccess(response.data)
    } catch (error) {
      this.fetchDataError(error.message)
    }
  }

  @action async getAllMatchesOfSeason(season: string) {
    this.fetchDataPending()
    try {
      const response = await http.get(`/matchdays/${season}`)
      this.fetchDataSuccess(response.data)
    } catch (error) {
      this.fetchDataError(error.message)
    }
  }
}
