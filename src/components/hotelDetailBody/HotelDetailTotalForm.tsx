import React, { useState, useEffect } from 'react';
import {
  Button,
  DatePicker,
  Checkbox,
  InputNumber,
  Popover,
} from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import {
  IconDepatureTime,
  IconGuest,
  StyledHotelDetailTotalForm,
  StyledMinusPlus,
} from '@components';
import { AppRoutes } from '@enums';
import { bookingHotelInfo } from '@redux';

export const HotelDetailTotalForm = () => {
  const { RangePicker } = DatePicker;
  const dispatch = useDispatch();
  const [standardRoom, setStandardRoom] = useState(0);
  const [familySuite, setFamilySuite] = useState(0);
  const [breackfast, setBreackfast] = useState(0);
  const [extraBed, setExtraBed] = useState(0);

  const [isBreackFastChecked, setIsBreackFastChecked] =
    useState(false);
  const [isExtraBedChecked, setIsExtraBedChecked] = useState(false);
  const [totalMoney, setTotalMoney] = useState(0);
  const [numberAdults, setNumberAdults] = useState<number>(2);
  const [numberChildren, setNumberChildren] = useState<number>(0);
  const [timeTour, setTimeTour] = useState<null | [any, any]>([
    '',
    '',
  ]);
  const [timeTourString, setTimeTourString] = useState<
    null | [any, any]
  >(['', '']);

  const handleIncrease = (setCount: any) => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = (count: number, setCount: any) => {
    if (count >= 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleCheck = (setChecked: any) => {
    setChecked((prev) => !prev);
  };

  const history = useHistory();

  const handleBooking = () => {
    if (!isBreackFastChecked && isExtraBedChecked) {
      dispatch(
        bookingHotelInfo({
          adults: numberAdults,
          children: numberChildren,
          timeString: timeTourString,
          standardRoom: standardRoom,
          familySuite: familySuite,
          breakfast: 0,
          extraBed: extraBed,
          totalMoney: totalMoney,
        }),
      );
    } else if (!isExtraBedChecked && isBreackFastChecked) {
      dispatch(
        bookingHotelInfo({
          adults: numberAdults,
          children: numberChildren,
          timeString: timeTourString,
          standardRoom: standardRoom,
          familySuite: familySuite,
          breakfast: breackfast,
          extraBed: 0,
          totalMoney: totalMoney,
        }),
      );
    } else if (!isExtraBedChecked && !isBreackFastChecked) {
      dispatch(
        bookingHotelInfo({
          adults: numberAdults,
          children: numberChildren,
          timeString: timeTourString,
          standardRoom: standardRoom,
          familySuite: familySuite,
          breakfast: 0,
          extraBed: 0,
          totalMoney: totalMoney,
        }),
      );
    } else {
      dispatch(
        bookingHotelInfo({
          adults: numberAdults,
          children: numberChildren,
          timeString: timeTourString,
          standardRoom: standardRoom,
          familySuite: familySuite,
          breakfast: breackfast,
          extraBed: extraBed,
          totalMoney: totalMoney,
        }),
      );
    }
    history.push(AppRoutes.HOTEL_CHECKOUT);
  };

  useEffect(() => {
    if (isBreackFastChecked && isExtraBedChecked) {
      setTotalMoney(
        standardRoom * 120 +
          familySuite * 240 +
          breackfast * 50 +
          extraBed * 100,
      );
    } else if (isBreackFastChecked) {
      setTotalMoney(
        standardRoom * 120 + familySuite * 240 + breackfast * 50,
      );
    } else if (isExtraBedChecked) {
      setTotalMoney(
        standardRoom * 120 + familySuite * 240 + extraBed * 100,
      );
    } else {
      setTotalMoney(standardRoom * 120 + familySuite * 240);
    }
  }, [
    isBreackFastChecked,
    isExtraBedChecked,
    breackfast,
    extraBed,
    standardRoom,
    familySuite,
  ]);

  const dateFormat = 'DD/MM/YYYY';

  return (
    <StyledHotelDetailTotalForm>
      <div className='hotel-detail-total-form-header'>
        <p>
          from <span>$234.00</span>
        </p>
      </div>
      <hr />
      <div className='hotel-detail-total-form-body'>
        <div className='total-form-body-pick-date-and-people'>
          <div className='total-form-body-pick-date'>
            <IconDepatureTime color={'#FF7B42'} />
            <RangePicker
              placeholder={['Start', 'End']}
              suffixIcon={null}
              bordered={false}
              format={dateFormat}
              value={timeTour}
              onChange={(dates, dateStrings) => {
                setTimeTourString(dateStrings);

                setTimeTour(dates);
              }}
              //prevent select days before today and today
              disabledDate={(current) => {
                return current && current < moment().endOf('day');
              }}
            />
          </div>
          <Popover
            content={
              <div
                className='popover-content'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <p style={{ margin: 0, marginRight: '5px' }}>
                    Adults :
                  </p>
                  <InputNumber
                    min={0}
                    max={20}
                    defaultValue={2}
                    bordered={false}
                    autoFocus={true}
                    value={numberAdults}
                    onChange={(value) => {
                      setNumberAdults(value);
                    }}
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <p style={{ margin: 0, marginRight: '5px' }}>
                    Children :
                  </p>
                  <InputNumber
                    min={0}
                    max={20}
                    defaultValue={0}
                    bordered={false}
                    value={numberChildren}
                    onChange={(value) => {
                      setNumberChildren(value);
                    }}
                  />
                </div>
              </div>
            }
            trigger='click'
            overlayInnerStyle={{
              width: '100%',
            }}
            overlayStyle={{
              padding: '0px',
              fontFamily: 'DM Sans',
              fontSize: '0.95rem',
            }}
          >
            <div className='booking-form-input-people'>
              <IconGuest />
              <p>
                {numberAdults} Adults - {numberChildren} Children
              </p>
            </div>
          </Popover>
        </div>
        <div className='total-form-body-pick-room'>
          <div className='total-form-body-pick-room-item'>
            <div className='type-of-room'>
              <p>Standard Room</p>
            </div>

            <div className='number-of-room'>
              <StyledMinusPlus
                onClick={() =>
                  handleDecrease(standardRoom, setStandardRoom)
                }
              >
                -
              </StyledMinusPlus>
              <p>{standardRoom}</p>
              <StyledMinusPlus
                onClick={() => handleIncrease(setStandardRoom)}
              >
                +
              </StyledMinusPlus>
            </div>

            <p>${(standardRoom * 120).toFixed(2)}</p>
          </div>
          <div className='total-form-body-pick-room-item'>
            <div className='type-of-room'>
              <p>Family Suite</p>
            </div>

            <div className='number-of-room'>
              <StyledMinusPlus
                onClick={() =>
                  handleDecrease(familySuite, setFamilySuite)
                }
              >
                -
              </StyledMinusPlus>
              <p>{familySuite}</p>
              <StyledMinusPlus
                onClick={() => handleIncrease(setFamilySuite)}
              >
                +
              </StyledMinusPlus>
            </div>

            <p>${(familySuite * 240).toFixed(2)}</p>
          </div>
        </div>
        <hr />
        <div className='total-form-body-add-ons-title'>
          <p>Add-ons:</p>
        </div>
        <div className='total-form-body-pick-add-ons'>
          <div className='total-form-body-pick-room-item'>
            <div className='type-of-room'>
              <div className='type-of-room-checkbox'>
                <Checkbox
                  onChange={() => handleCheck(setIsBreackFastChecked)}
                />
              </div>

              <p>Breakfast</p>
            </div>
            <div className='number-of-room'>
              <StyledMinusPlus
                onClick={() =>
                  handleDecrease(breackfast, setBreackfast)
                }
              >
                -
              </StyledMinusPlus>
              <p>{breackfast}</p>
              <StyledMinusPlus
                onClick={() => handleIncrease(setBreackfast)}
              >
                +
              </StyledMinusPlus>
            </div>

            <p>${(breackfast * 50).toFixed(2)}</p>
          </div>
          <div className='total-form-body-pick-room-item'>
            <div className='type-of-room'>
              <div className='type-of-room-checkbox'>
                <Checkbox
                  onChange={() => handleCheck(setIsExtraBedChecked)}
                />
              </div>
              <p>Extra Bed</p>
            </div>
            <div className='number-of-room'>
              <StyledMinusPlus
                onClick={() => handleDecrease(extraBed, setExtraBed)}
              >
                -
              </StyledMinusPlus>
              <p>{extraBed}</p>
              <StyledMinusPlus
                onClick={() => handleIncrease(setExtraBed)}
              >
                +
              </StyledMinusPlus>
            </div>

            <p>${(extraBed * 100).toFixed(2)}</p>
          </div>
        </div>
        <hr />
        <div className='total-form-body-total-money'>
          <p>Total</p>
          <p>
            <span>$ {totalMoney.toFixed(2)}</span>
          </p>
        </div>
        <div className='total-form-body-submit'>
          <Button onClick={handleBooking}>Book now</Button>
        </div>
      </div>
    </StyledHotelDetailTotalForm>
  );
};
