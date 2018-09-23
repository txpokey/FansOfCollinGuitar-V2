package com.category.fans.service.youtube

import ServiceTool
import Credential
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver
import GoogleAuthorizationCodeFlow
import GoogleClientSecrets
import GoogleCredential
import GoogleNetHttpTransport
import HttpTransport
import JsonFactory
import JacksonFactory
import FileDataStoreFactory
import YouTube
import YouTubeScopes
import PlaylistListResponse
import Slf4j
import Test

//    compile 'com.google.api-client:google-api-client:1.25.0'
//    compile 'com.google.oauth-client:google-oauth-client-jetty:1.22.0'
//    compile 'com.google.apis:google-api-services-youtube:v3-rev182-1.22.0'
//    compile group: 'com.google.code.gson', name: 'gson', version: '1.7.2'
//    compile group: 'com.fasterxml.jackson.core', name: 'jackson-databind', version: '2.4.4'
@Slf4j
@Test
class PlayListByChannelTestUsingNutzoGoogleCodeThatDoesntWork{

    void googleCode() {
        YouTube youtube = getYouTubeService()
        HashMap<String, String> parameters = new HashMap<>()
        parameters.put("part", "snippet,contentDetails")
        parameters.put("channelId", "UCYkk_DU_k1sWyOw_fy6Raug")
        parameters.put("maxResults", "25")

        List playlistsListByChannelIdRequest = youtube.playlists().list(parameters.get("part").toString())
        if (parameters.containsKey("channelId") && parameters.get("channelId") != "") {
            playlistsListByChannelIdRequest.setChannelId(parameters.get("channelId").toString())
        }

        if (parameters.containsKey("maxResults")) {
            playlistsListByChannelIdRequest.setMaxResults(Long.parseLong(parameters.get("maxResults").toString()))
        }

        PlaylistListResponse response = playlistsListByChannelIdRequest.execute()
        com.category.fans.service.youtube.PlayListByChannelTestUsingNutzoGoogleCodeThatDoesntWork.log.debug(response)
    }
    /**
     * Creates an authorized Credential object.
     * @return an authorized Credential object.
     * @throws IOException
     */
    private static Credential authorize() throws IOException {
        // Load client secrets.
        InputStream in0 = PlayListByChannelTestUsingNutzoGoogleCodeThatDoesntWork.class.getResourceAsStream("/client_secret.json")
        GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in0))

        // Build flow and trigger user authorization request.
        GoogleAuthorizationCodeFlow flow = new Builder(
                HTTP_TRANSPORT, JSON_FACTORY, clientSecrets, SCOPES)
                .setDataStoreFactory(DATA_STORE_FACTORY)
                .setAccessType("offline")
                .build()
        Credential credential = new AuthorizationCodeInstalledApp(
                flow, new LocalServerReceiver()).authorize("user")
        com.category.fans.service.youtube.PlayListByChannelTestUsingNutzoGoogleCodeThatDoesntWork.log.debug(
                "Credentials saved to " + DATA_STORE_DIR.getAbsolutePath())
        credential
    }

    /**
     * Build and return an authorized API client service, such as a YouTube
     * Data API client service.
     * @return an authorized API client service
     * @throws IOException
     */
    private static YouTube getYouTubeService() throws IOException {
//        Credential credential = authorize()
        Credential credential = authorizeService()
        def built = new Builder(
                HTTP_TRANSPORT, JSON_FACTORY, credential)
                .setApplicationName(APPLICATION_NAME)
                .build()
        built
    }
    private static final String APPLICATION_NAME = "categorysoftware-college-0" // "API Sample"

    /** Directory to store user credentials for this application. */
    private static final java.io.File DATA_STORE_DIR = new java.io.File(
            System.getProperty("user.home"), ".credentials/java-youtube-api-tests")

    /** Global instance of the {@link FileDataStoreFactory}. */
    private static FileDataStoreFactory DATA_STORE_FACTORY

    /** Global instance of the JSON factory. */
    private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance()

    /** Global instance of the HTTP transport. */
    private static HttpTransport HTTP_TRANSPORT
    /** Global instance of the scopes required by this quickstart.
     *
     * If modifying these scopes, delete your previously saved credentials
     * at ~/.credentials/drive-java-quickstart
     */
    private static final Collection<String> SCOPES =
            Arrays.asList("YouTubeScopes.https://www.googleapis.com/auth/youtube.force-ssl YouTubeScopes.https://www.googleapis.com/auth/youtubepartner")
    static {
        try {
            HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport()
            DATA_STORE_FACTORY = new FileDataStoreFactory(DATA_STORE_DIR)
        } catch (Throwable t) {
            t.printStackTrace()
            System.exit(1)
        }
    }

    static void authorizeService() {  // WORKS!
        final def whereIsIt = "/categorysoftware-college-0-869dc5f126f3.json"
        def in0 = ServiceTool.getContentFromClasspathResourceAsInputStream(whereIsIt)
        Credential credential = GoogleCredential.fromStream(in0)
                .createScoped(Collections.singleton(YouTubeScopes.YOUTUBE_READONLY))
        credential
    }
    void getServiceTest() {
        def foo = getYouTubeService()
        foo
    }
}
