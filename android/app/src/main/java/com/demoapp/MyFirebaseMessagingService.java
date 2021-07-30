package com.demoapp;

import android.util.Log;

import androidx.annotation.NonNull;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

public class MyFirebaseMessagingService extends FirebaseMessagingService {

    @Override
    public void onNewToken(String token) {
        Log.d("TAG","The token refreshed:" + token);
//      sendRegistrationToServer(token);
    }

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        super.onMessageReceived(remoteMessage);
        // Check if message contains a notification payload.
        if (remoteMessage.getNotification() != null) {
            Log.d("My TAG", "Message Notification Body: " + remoteMessage.getNotification().getBody());
            getFirebaseMsg(remoteMessage.getNotification().getTitle(), remoteMessage.getNotification().getBody());
        }
        Log.d("TAG", "From src: " + remoteMessage.getFrom());
    }

    public void getFirebaseMsg(String title,String msg) {
        NotificationCompat.Builder builder = new NotificationCompat.Builder(this,"myChannelId")
                .setSmallIcon(R.drawable.notification_icon)
                .setContentTitle(title)
                .setContentText(msg)
                .setAutoCancel(true);
        Log.d("mohi", "builder");

        NotificationManagerCompat manager = NotificationManagerCompat.from(this);
        Log.d("mohi1", "builder");
        manager.notify(010,builder.build());
        Log.d("mohi2", "builder");
    }
}
