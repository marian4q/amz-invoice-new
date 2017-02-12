var React = require('react');
var ReactDOM = require('react-dom')
var _ = require('lodash');


var Container = React.createClass({
  render : function () {
    return (
      <div>

        <img src="./img/amazon-logo-tiny._V192256679_.gif" width="113" align="left" height="23" border="0" />
        <br />

                <br />
                <div className="center-txt"><b className="h1">
                          Final Details for Order <span className="order-num">#107-9298298-2630658</span>
                </b><br />

                </div>
                <br />
                <table width="90%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                <tbody><tr>
                  <td>
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                      <tbody><tr><td valign="top" align="left">
                        <b>
                              Order Placed:
                        </b>

              {/* =====================  CHANGE  =================================================================== */}
                       <span className="inv-date"> January 12, 2015 </span>

              {/* =====================  CHANGE  =================================================================== */}
                      </td></tr>
                      <tr><td valign="top" align="left">
                        <b>Amazon.com order number:</b>
                        107-9298298-2630658
                      </td></tr>
                      <tr><td valign="top" align="left">
                        <b>Order Total:

              {/* =====================  CHANGE  =================================================================== */}
                        <span className="total-price"> $84.04</span></b>

              {/* =====================  CHANGE  =================================================================== */}
                      </td></tr>
                    </tbody></table>
                    <br />
                <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#000000" align="center">
                <tbody><tr bgcolor="#000000">
                  <td>
                    <table width="100%" border="0" cellspacing="3" cellpadding="0" align="center" bgcolor="#000000">
                      <tbody><tr bgcolor="#ffffff">
                        <td valign="top" colspan="2">
                          <table width="100%" border="0" cellspacing="0" cellpadding="5">
                            <tbody><tr bgcolor="#ffffff">
                              <td>
                                <b className="sans"><div className="center-txt">

              {/* =====================  CHANGE  =================================================================== */}
                                  Shipped on  <span className="inv-shipped">January 13, 2015 </span>

              {/* =====================  CHANGE  =================================================================== */}
                                </div></b>
                              </td>
                            </tr>
                          </tbody></table>
                        </td>
                      </tr>
                      <tr>
                        <td bgcolor="#ffffff" valign="top" colspan="2">
                          <table width="100%" border="0" cellspacing="0" cellpadding="2">
                            <tbody><tr valign="top">
                              <td width="100%">
                                <table border="0" cellspacing="0" cellpadding="2" align="right">
                                  <tbody><tr valign="top">
                                    <td align="right">
                                      &nbsp;
                                    </td>
                                  </tr>
                                </tbody></table>

                  <table id="table-items-body" border="0" cellspacing="2" cellpadding="0" width="100%">
                    <tbody>
                      <tr valign="top">
                      <td valign="top">
                        <b>Items Ordered</b>
                      </td>
                      <td align="right" valign="top">
                        <b>Price</b>
                      </td>
                    </tr>


              {/* Start TR Item 1 */}
                <tr>
                  <input type="hidden" name="kmnmpriltkpppw" value="1" />
                  <td colspan="1" valign="top">
                    1
                    of:

              {/* =====================  CHANGE  =================================================================== */}
                    <i className="item one">Samsung S Mouse for Tablets (ET-MP900DBEGUJ) for Galaxy Note Pro &amp; Tab Pro</i><br />

              {/* =====================  CHANGE  =================================================================== */}
                    <span className="tiny">
                      Sold by: Amazon.com LLC
                      <br />
                      <br />
                      Condition: New<br />
                    </span>
                  </td>

                {/* =====================  CHANGE  =================================================================== */}
                  <td align="right" valign="top" colspan="2" className="item-price one">
                    $27.99<br />

                {/* =====================  CHANGE  =================================================================== */}
                  </td>
                </tr>
              {/* End TR Item 1 */}


              {/* Start TR Item  2 */}
                <tr>
                    <input type="hidden" name="kmnmpriltkptpw" value="1" />
                    <td colspan="1" valign="top">
                      1
                      of:

                {/* =====================  CHANGE  =================================================================== */}
                      <i className="item two">Microsoft Xbox One Controller + Cable for Windows</i><br />

                {/* =====================  CHANGE  =================================================================== */}
                      <span className="tiny">
                        Sold by: Amazon.com LLC
                  <br />
                        <br />
                        Condition: New<br />
                      </span>
                    </td>

                {/* =====================  CHANGE  =================================================================== */}
                    <td align="right" valign="top" colspan="2" className="item-price two">
                      $56.05<br />

                {/* =====================  CHANGE  =================================================================== */}
                </td>
                </tr>
              {/* End TR Item 2 */}


                                </tbody></table>
                                <br />
                              </td>
                            </tr>
                          </tbody></table>
                        </td>
                      </tr>
                      <tr>
                        <td bgcolor="#ffffff" valign="top" colspan="2">
                          <table width="100%" border="0" cellspacing="0" cellpadding="2">
                            <tbody><tr>
                              <td>
                <b>
                Shipping Address:
                </b>
                <br />
                <div className="displayAddressDiv">
                <ul className="displayAddressUL">
                <li className="displayAddressLI displayAddressFullName">Nicolas Moccagatta</li>
                <li className="displayAddressLI displayAddressAddressLine1">555 W MADISON ST</li>
                <li className="displayAddressLI displayAddressAddressLine2">Floor 22, Room# 2210,  Presidential towers Tower 4,</li>
                <li className="displayAddressLI displayAddressCityStateOrRegionPostalCode">CHICAGO, IL 60661-2500</li>
                <li className="displayAddressLI displayAddressCountryName">United States</li>
                </ul>
                </div>
                <br /><b>
                Shipping Speed:
                </b>
                <br />
                FREE Shipping
                <br />
                              </td>
                              <td align="right">
                                <table border="0" cellpadding="0" cellspacing="1">
                  <tbody><tr valign="top">
                      <td nowrap="nowrap" align="right">Item(s) Subtotal: </td>

              {/* =====================  CHANGE  =================================================================== */}
                      <td nowrap="nowrap" align="right" className="total-price">$84.04</td>

              {/* =====================  CHANGE  =================================================================== */}
                  </tr>
                  <tr valign="top">
                      <td nowrap="nowrap" align="right">Shipping &amp; Handling:</td>

              {/* =====================  CHANGE  =================================================================== */}
                      <td nowrap="nowrap" align="right">$8.87</td>

              {/* =====================  CHANGE  =================================================================== */}
                  </tr>
                  <tr valign="top">
                      <td nowrap="nowrap" align="right">Free shipping:</td>

              {/* =====================  CHANGE  =================================================================== */}
                      <td nowrap="nowrap" align="right">-$8.87</td>

              {/* =====================  CHANGE  =================================================================== */}
                  </tr>
                  <tr valign="top">
                      <td nowrap="nowrap" align="right">&nbsp;</td>
                      <td nowrap="nowrap" align="right">-----</td>
                  </tr>
                  <tr valign="top">
                      <td nowrap="nowrap" align="right">Total before tax:</td>

              {/* =====================  CHANGE  =================================================================== */}
                      <td nowrap="nowrap" align="right" className="total-price">$84.04</td>

              {/* =====================  CHANGE  =================================================================== */}
                  </tr>
                  <tr valign="top">
                      <td nowrap="nowrap" align="right">Sales Tax:</td>
                      <td nowrap="nowrap" align="right">$0.00</td>
                  </tr>
                  <tr valign="top">
                      <td nowrap="nowrap" align="right">&nbsp;</td>
                      <td nowrap="nowrap" align="right">-----</td>
                  </tr>
                  <tr valign="top">
                      <td nowrap="nowrap" align="right"><b>Total for This Shipment:</b></td>

              {/* =====================  CHANGE  =================================================================== */}
                      <td nowrap="nowrap" align="right"><b className="total-price">$84.04</b></td>

              {/* =====================  CHANGE  =================================================================== */}
                  </tr>
                  <tr valign="top">
                      <td nowrap="nowrap" align="right">&nbsp;</td>
                      <td nowrap="nowrap" align="right">-----</td>
                  </tr>
                </tbody></table>
                              </td>
                            </tr>
                          </tbody></table>
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
                </tbody></table>
                <br />
                <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#000000" align="center">
                <tbody><tr bgcolor="#000000">
                  <td>
                    <table width="100%" border="0" cellspacing="3" cellpadding="0" align="center" bgcolor="#000000">
                      <tbody><tr bgcolor="#ffffff">
                        <td valign="top" colspan="2">
                          <table width="100%" border="0" cellspacing="0" cellpadding="5">
                            <tbody><tr bgcolor="#ffffff">
                              <td>
                                <b className="sans"><div className="center-txt">Payment information</div></b>
                              </td>
                            </tr>
                          </tbody></table>
                        </td>
                      </tr>
                      <tr>
                        <td bgcolor="#ffffff" valign="top" colspan="2">
                          <table width="100%" border="0" cellspacing="0" cellpadding="2">
                            <tbody><tr valign="top">
                              <td width="100%">
                                <table border="0" cellspacing="0" cellpadding="2" align="right">
                                  <tbody><tr valign="top">
                                    <td align="right">
                                      <table border="0" cellpadding="0" cellspacing="1">
                  <tbody><tr valign="top">
                      <td nowrap="nowrap" align="right">Item(s) Subtotal: </td>

              {/* =====================  CHANGE  =================================================================== */}
                      <td nowrap="nowrap" align="right" className="total-price">$84.04</td>

              {/* =====================  CHANGE  =================================================================== */}
                  </tr>
                  <tr valign="top">
                      <td nowrap="nowrap" align="right">Shipping &amp; Handling:</td>

              {/* =====================  CHANGE  =================================================================== */}
                      <td nowrap="nowrap" align="right">$8.87</td>

              {/* =====================  CHANGE  =================================================================== */}
                  </tr>
                  <tr valign="top">
                      <td nowrap="nowrap" align="right">Free shipping:</td>

              {/* =====================  CHANGE  =================================================================== */}
                      <td nowrap="nowrap" align="right">-$8.87</td>

              {/* =====================  CHANGE  =================================================================== */}
                  </tr>
                  <tr valign="top">
                      <td nowrap="nowrap" align="right">&nbsp;</td>
                      <td nowrap="nowrap" align="right">-----</td>
                  </tr>
                  <tr valign="top">
                      <td nowrap="nowrap" align="right">Total before tax:</td>

              {/* =====================  CHANGE  =================================================================== */}
                      <td nowrap="nowrap" align="right" className="total-price">$84.04</td>

              {/* =====================  CHANGE  =================================================================== */}
                  </tr>
                  <tr valign="top">
                      <td nowrap="nowrap" align="right">Estimated tax to be collected:</td>
                      <td nowrap="nowrap" align="right">$0.00</td>
                  </tr>
                  <tr valign="top">
                      <td nowrap="nowrap" align="right">&nbsp;</td>
                      <td nowrap="nowrap" align="right">-----</td>
                  </tr>
                  <tr valign="top">
                      <td nowrap="nowrap" align="right"><b>Grand Total:</b></td>

              {/* =====================  CHANGE  =================================================================== */}
                      <td nowrap="nowrap" align="right"><b className="total-price">$84.04</b></td>

              {/* =====================  CHANGE  =================================================================== */}
                  </tr>
                </tbody></table>
                                    </td>
                                  </tr>
                                </tbody></table>
                <b>Payment Method: </b>
                <br />
                  Visa
                  <nobr> | Last digits:  1327</nobr>
                <br />
                <br />
                <b>Billing address</b>
                <div className="displayAddressDiv">
                <ul className="displayAddressUL">

              {/* =====================  CHANGE  =================================================================== */}
                <li className="displayAddressLI displayAddressFullName">Nicolas Moccagatta</li>
                <li className="displayAddressLI displayAddressAddressLine1">555 W MADISON ST</li>
                <li className="displayAddressLI displayAddressAddressLine2">Floor 22, Room# 2210,  Presidential towers Tower 4,</li>
                <li className="displayAddressLI displayAddressCityStateOrRegionPostalCode">CHICAGO, IL 60661-2500</li>
                <li className="displayAddressLI displayAddressCountryName">United States</li>

              {/* =====================  CHANGE  =================================================================== */}
                </ul>
                </div>
                              </td>
                            </tr>
                          </tbody></table>
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
                </tbody></table>
                  </td>
                </tr>
                </tbody></table>
                <div className="center-txt">
                <p>To view the status of your order, return to <a href="https://www.amazon.com/gp/css/summary/edit.html?ie=UTF8&orderID=107-9298298-2630658">Order Summary</a>.</p>

                </div>

                <br />
                <div className="tiny">
                <a href="http://www.amazon.com/gp/help/customer/display.html?ie=UTF8&nodeId=508088" rel="nofollow">Conditions of Use</a>
                |
                <a href="http://www.amazon.com/gp/help/customer/display.html?ie=UTF8&nodeId=468496" rel="nofollow">Privacy Notice</a>
                © 1996-2015, Amazon.com, Inc. or its affiliates
                </div>

      </div>
    );
  }

});

module.exports = Container;
