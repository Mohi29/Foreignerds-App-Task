package com.demoapp;

import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.messaging.FirebaseMessaging;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "DemoApp";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    FirebaseMessaging.getInstance().subscribeToTopic("movie")
            .addOnCompleteListener(new OnCompleteListener<Void>() {
              @Override
              public void onComplete(@NonNull Task<Void> task) {
                String msg = getString(R.string.msg_subscribed);
                if (!task.isSuccessful()) {
                  msg = getString(R.string.msg_subscribe_failed);
                }
                Log.d("TAG", msg);
                Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();
              }
            });
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }

//  @Override
//  protected void onCreate(Bundle savedInstanceState) {
//    super.onCreate(savedInstanceState);
//
//    FirebaseMessaging.getInstance().subscribeToTopic("movie")
//            .addOnCompleteListener(new OnCompleteListener<Void>() {
//              @Override
//              public void onComplete(@NonNull Task<Void> task) {
//                String msg = getString(R.string.msg_subscribed);
//                if (!task.isSuccessful()) {
//                  msg = getString(R.string.msg_subscribe_failed);
//                }
//                Log.d("TAG", msg);
//                Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();
//              }
//            });
//  }
}
