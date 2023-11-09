import { TestBed } from '@angular/core/testing';

import { StockMetricsService } from './stock-metrics.service';

describe('StockMetricsService', () => {
  let service: StockMetricsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockMetricsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
