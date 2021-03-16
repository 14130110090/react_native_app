package com.mrnapp;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

import android.Manifest;
import android.content.ComponentName;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Build;
import android.os.Bundle;
import android.os.IBinder;
import android.os.RemoteException;
import android.util.Log;
import android.widget.Button;

import com.example.boxuegu.aidl.ITestManager;
import com.example.boxuegu.aidl.User;

public class MainActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_m_main);
        Button b=findViewById(R.id.buttonM);

        b.setOnClickListener(v -> {
            Log.i("mylog","点击了");
            Intent intent = new Intent();
            intent.setClassName("com.example.boxuegu","com.example.boxuegu.service.MyService");
            bindService(intent, new ServiceConnection() {
                @Override
                public void onServiceConnected(ComponentName name, IBinder service) {
                    Log.i("mylog","连上了"+name);
                    ITestManager testManager=ITestManager.Stub.asInterface(service);
                    try {
                        testManager.addUser(new User(1,"fasd"));
                        Log.i("mylog",testManager.getUserList().get(0).name);
                    } catch (RemoteException e) {
                        e.printStackTrace();
                    }
                }

                @Override
                public void onServiceDisconnected(ComponentName name) {
                    Log.i("mylog","关闭了");
                }
            },BIND_AUTO_CREATE);
        });
//        OkHttpClient client =new OkHttpClient();
//
//        Request request=new Request.Builder().get().url("https://jhh-server-data.oss-cn-shanghai.aliyuncs.com/bundles/index.android.bundle").build();
//        Call call=client.newCall(request);
//        call.enqueue(new Callback() {
//            @Override
//            public void onFailure(Call call, IOException e) {
//                Log.i("shibai","");
//            }
//
//            @Override
//            public void onResponse(Call call, Response response) throws IOException {
//                ResponseBody responseBody = response.body();
//                long total = responseBody.contentLength();
//                BufferedInputStream bis = new BufferedInputStream(responseBody.byteStream());
//                File file = new File(getCacheDir(),"index.android.bundle");
//                FileOutputStream fos = new FileOutputStream(file);
//                byte[] bytes = new byte[1024 * 8];
//                int len;
//                long current = 0;
//                while ((len = bis.read(bytes)) != -1) {
//                    fos.write(bytes, 0, len);
//                    fos.flush();
//                    current += len;
//                    //计算进度
//                    int progress = (int) (100 * current / total);
//                    Log.i("mylog",""+progress);
//                }
//
//            }
//        });

    }
}