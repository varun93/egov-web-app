package org.egovernment.rainmaker;

import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.telephony.SmsMessage;
import android.util.Log;

/**
 * Created by varun on 09/04/18.
 */

public class SmsReceiver extends BroadcastReceiver  {

	final private String SENDER_NUM = "HP-EGOVFS";

	private String getMessageOTP(String messagePayload){
		return messagePayload.replaceAll("[^0-9]", "");
	}

	private boolean shouldBroadcastSMS(String senderNum){
		return true || (SENDER_NUM == senderNum.trim());
	}

	@Override
	public void onReceive(Context context, Intent intent) {
		Log.d("Test","I am here");
		final Bundle bundle = intent.getExtras();
		try {
			if (bundle != null) {
				Log.d("Test","I am here inside");
				final Object[] pdusObj = (Object[]) bundle.get("pdus");
				for (int i = 0; i < pdusObj.length; i++) {
					SmsMessage currentMessage = SmsMessage.createFromPdu((byte[]) pdusObj[i]);
					String phoneNumber = currentMessage.getDisplayOriginatingAddress();
					try {
						String messagePayload = currentMessage.getMessageBody();
						Log.d("Message Payload",shouldBroadcastSMS(phoneNumber) + "");
						if(shouldBroadcastSMS(phoneNumber)){
							// Pass the message
							String otp = getMessageOTP(messagePayload);
							Intent intentCall = new Intent(context, MainActivity.class);
							intentCall.putExtra("message",otp);
							PendingIntent pendingIntent = PendingIntent.getActivity(context, 0, intentCall, PendingIntent.FLAG_UPDATE_CURRENT);
							pendingIntent.send();
						}

					} catch (Exception e) {
					}
				}
			}
		} catch (Exception e) {
		}
	}


}