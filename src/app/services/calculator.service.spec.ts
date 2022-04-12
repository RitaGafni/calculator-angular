import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have compute function', () => {
    expect(service.compute).toBeTruthy();
  });

  it('should compute correctly with all operands', () => {
    expect(service.compute('123', '321 +')).toEqual('444');
    expect(service.compute('123', '321 -')).toEqual('198');
    expect(service.compute('123', '321 /')).toEqual('2.60976');
    expect(service.compute('123', '321 *')).toEqual('39483');
  });
});
