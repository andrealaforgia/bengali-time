import BengaliTimeStringBuilder from '../src/bengali-time-string-builder'

const TEST_PARAMETERS = [
    {time: '06:00:00', expectedTimeString: '06:00:00 Sokal'},
    {time: '09:18:27', expectedTimeString: '06:00:00 Sokal'},        
    {time: '11:59:59', expectedTimeString: '06:00:00 Sokal'},        
    
    {time: '12:00:00', expectedTimeString: '12:00:00 Dupur'},
    {time: '13:26:52', expectedTimeString: '12:00:00 Dupur'},        
    {time: '15:59:59', expectedTimeString: '12:00:00 Dupur'},   
    
    {time: '16:00:00', expectedTimeString: '04:00:00 Bikal'},
    {time: '16:32:04', expectedTimeString: '04:00:00 Bikal'},        
    {time: '17:59:59', expectedTimeString: '04:00:00 Bikal'},   
    
    {time: '18:00:00', expectedTimeString: '06:00:00 Sondha'},
    {time: '18:36:02', expectedTimeString: '06:00:00 Sondha'},        
    {time: '19:59:59', expectedTimeString: '06:00:00 Sondha'},   
    
    {time: '20:00:00', expectedTimeString: '08:00:00 Raat'},
    {time: '22:00:00', expectedTimeString: '08:00:00 Raat'},
    {time: '00:00:00', expectedTimeString: '08:00:00 Raat'},
    {time: '03:03:03', expectedTimeString: '08:00:00 Raat'},        
    {time: '05:59:59', expectedTimeString: '08:00:00 Raat'}
];

describe('bengaliTimeStringBuilder', () => {

    let bengaliTimeStringBuilder = new BengaliTimeStringBuilder();

    test('should build time string as expected', () => {
        TEST_PARAMETERS.forEach(parameter => {
            expect(bengaliTimeStringBuilder.build(new Date('2019-04-27T'+parameter.time))).toBe(parameter.expectedTimeString);
        });
    });
});
  